import React from 'react'
import { Box, Typography, Container, useTheme } from '@mui/material'
import AboutData from './About.json'
import { highlightWords } from '../../utils'

const About = () => {
    const theme = useTheme()
    return (
        <Box sx={{ bgcolor: 'primary.main', py: 8 }}>
            {/* <Grid2 container direction='row' justifyContent="center"
                alignItems="center"
                spacing={4} sx={{mt: 15, maxWidth: '90%', mx: 'auto'}}> */}
            {/* About Me Heading */}
            {/* <Grid2 item> */}
            <Container maxWidth="md" sx={{ pt: 15 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontFamily: theme.typography.fancy,
                    }}
                >
                    About Me
                </Typography>
                {/* </Grid2> */}
                {/* About Me Content */}
                {/* <Grid2 item> */}
                {AboutData.aboutContent.map((paragraph, idx) => (
                    <Box key={idx}>
                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: '700px',
                                mx: 'auto',
                                fontSize: '1.1rem',
                            }}
                        >
                            {highlightWords(paragraph)}
                        </Typography>
                        <br />
                        {idx === AboutData.aboutContent.length - 2 && <br />}
                    </Box>
                ))}
            </Container>
            {/* </Grid2> */}
            {/* </Grid2> */}
        </Box>
    )
}

export default About
