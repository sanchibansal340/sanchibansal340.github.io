import React from 'react'
import { Box, Typography, Container } from '@mui/material'

const About = () => {
    return (
        <Box sx={{ bgcolor: '#55c2a6', textAlign: 'center', py: 8 }}>
            {/* Top Triangle Shape */}
            {/* <Box
        sx={{
          width: "100%",
          height: "80px",
          position: "absolute",
          top: "-79px",
          left: 0,
          clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          bgcolor: "#55c2a6",
        }}
      /> */}

            {/* About Me Content */}
            <Container maxWidth="md">
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
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
