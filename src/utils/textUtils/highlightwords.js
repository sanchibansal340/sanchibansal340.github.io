import highlightedWords from './highlightWords.json'

// Utility to escape regex special characters
function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getHighlightedWords(
    wordType,
    { isArrayData = true, valueFrom = null } = {}
) {
    const params = { isArrayData, valueFrom }
    var words = null

    if (params.isArrayData === true) {
        words = []
        for (let i in highlightedWords[wordType]) {
            const wordConfig = highlightedWords[wordType][i]
            const mergedWords = words.concat(wordConfig['words'])
            words = mergedWords
        }
    } else {
        words = {}
        for (let i in highlightedWords[wordType]) {
            const wordConfig = highlightedWords[wordType][i]
            for (let j in wordConfig['words']) {
                words[wordConfig['words'][j]] = wordConfig[params.valueFrom]
            }
        }
    }

    return words
}

export function highlightWords(text) {
    const boldWords = getHighlightedWords('boldWords')
    const linkWords = getHighlightedWords('linkWords', {
        isArrayData: false,
        valueFrom: 'url',
    })
    const skipWords = Object.keys(linkWords)

    let placeholderMap = {}
    let processedText = text

    // Step 1: Replace skip phrases with unique placeholders
    skipWords.forEach((phrase, index) => {
        const placeholder = `__PLACEHOLDER_${index}__`
        placeholderMap[placeholder] = phrase

        const safeRegex = new RegExp(escapeRegExp(phrase), 'g')
        processedText = processedText.replace(safeRegex, placeholder)
    })

    console.log('processed text', processedText)
    console.log(placeholderMap)

    // Step 2: Build regex only from boldWords that are not part of skip/link phrases
    const filteredBoldWords = boldWords.filter(
        (word) => !skipWords.includes(word)
    )
    const pattern = `\\b(${filteredBoldWords.map(escapeRegExp).join('|')})\\b`
    const parts = processedText.split(new RegExp(pattern, 'gi'))

    // Step 3: Reconstruct and restore skip phrases
    const result = parts.map((part, i) => {
        if (filteredBoldWords.includes(part)) {
            return <strong key={i}>{part}</strong>
        }

        if (part.includes(placeholderMap[part])) {
            const linkWord = placeholderMap[part]
            ;<a
                key={i}
                href={linkWords[linkWord]}
                target="_blank"
                rel="noopener noreferrer"
            >
                {linkWord}
            </a>
        }

        return part
    })

    return result
}
