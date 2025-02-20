import React from 'react'
import { Box, Typography, Container, useTheme } from '@mui/material'

const About = () => {
    const theme = useTheme()
    return (
        <Box sx={{ bgcolor: '#55c2a6', textAlign: 'center', py: 8 }}>
            {/* About Me Content */}
            <Container maxWidth="md">
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
                <Typography
                    variant="body1"
                    sx={{ maxWidth: '700px', mx: 'auto' }}
                >
                    I'm a software engineer passionate about building seamless,
                    user-friendly web experiences. With expertise in React,
                    Django, and AWS, I craft scalable applications that bring
                    ideas to life.
                </Typography>
            </Container>
        </Box>
    )
}

export default About
