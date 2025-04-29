import highlightedWords from './highlightWords.json'
import { Box } from '@mui/material'
import theme from '../../assets/theme'

// Utility to escape regex special characters
function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// build words to be highlighted based on array or list
function getHighlightedWords(
    wordType,
    { isArrayData = true, valueFrom = null } = {}
) {
    const params = { isArrayData, valueFrom }
    var words = null

    if (params.isArrayData === true) {
        words = highlightedWords[wordType]
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

const process_links_in_text = (part, placeholderMap, linkWords) => {
    const linkProcessedPart = part
        .split(/(@__PLACEHOLDER_\d+__@)/g)
        .map((linkPatternMatch, idx) => {
            const linkWord = placeholderMap[linkPatternMatch]

            return linkWord !== undefined ? (
                <Box
                    component="a"
                    key={idx}
                    href={linkWords[linkWord]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-animation"
                    sx={{
                        color: theme.palette.secondary.dark,
                        '--underline-animation-color':
                            theme.palette.secondary.dark,
                    }}
                >
                    {linkWord}
                </Box>
            ) : (
                <span key={idx}>{linkPatternMatch}</span>
            )
        })

    return linkProcessedPart
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
    let result = null

    // Step 1: Replace skip phrases with unique placeholders
    skipWords.forEach((phrase, index) => {
        const placeholder = `@__PLACEHOLDER_${index}__@`
        placeholderMap[placeholder] = phrase

        const safeRegex = new RegExp(escapeRegExp(phrase), 'g')
        processedText = processedText.replace(safeRegex, placeholder)
    })

    // Step 2: Build regex only from boldWords that are not part of skip/link phrases
    if (boldWords.length > 0) {
        const filteredBoldWords = boldWords.filter(
            (word) => !skipWords.includes(word)
        )
        const pattern = `\\b(${filteredBoldWords.map(escapeRegExp).join('|')})\\b`
        const parts = processedText.split(new RegExp(pattern, 'gi'))

        // Step 3: Reconstruct and restore skip phrases
        result = parts.map((part, i) => {
            if (filteredBoldWords.includes(part)) {
                return <strong key={i}>{part}</strong>
            }

            const linkProcessedPart = process_links_in_text(
                part,
                placeholderMap,
                linkWords
            )
            return linkProcessedPart
        })
    } else {
        // Step 2: Reconstruct and restore skip phrases
        result = process_links_in_text(processedText, placeholderMap, linkWords)
    }

    return result
}
