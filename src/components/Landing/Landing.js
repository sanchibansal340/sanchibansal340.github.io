import React from 'react'
import { Box, Typography, Grid2, Avatar } from '@mui/material'
import jsonData from './Landing.json'
import MyPic from '../../assets/my_img.png'

const Landing = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            {/* Main Grid2 */}
            <Grid2 container spacing={3} sx={{ alignItems: 'center' }}>
                {/* Left Section - Text */}
                <Grid2 item xs={12} md={5} sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Hi, I’m
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 'bold', color: '#55c2a6' }}
                    >
                        Sanchi Bansal
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mt: 1, fontSize: '1.25rem' }}
                    >
                        Turning coffee into code and ideas into reality! 🚀{' '}
                        <br />
                        I’m a Software Engineer specializing in all things web,{' '}
                        <br />
                        crafting digital magic with React, Python, and AWS.
                    </Typography>
                    {/* Links */}
                    <Box sx={{ mt: 3, fontSize: '1.25rem' }}>
                        {jsonData.socials.map((social) => (
                            <a
                                href={social.url}
                                style={{
                                    color: '#55c2a6',
                                    marginRight: '1rem',
                                }}
                                target="_blank"
                            >
                                &#10100;{social.name}&#10101;
                            </a>
                        ))}
                        <p>
                            Mail at:{' '}
                            <a
                                href="mailto:sanchibansal340@gmail.com"
                                style={{
                                    color: '#55c2a6',
                                    marginRight: '1rem',
                                }}
                            >
                                sanchibansal340@gmail.com
                            </a>
                        </p>
                    </Box>
                </Grid2>

                {/* Spacing */}
                <Grid2 item xs={12} md={2} />

                {/* Right Section - Circular Image */}
                <Grid2
                    item
                    xs={12}
                    md={5}
                    display="flex"
                    justifyContent="center"
                >
                    <Box
                        sx={{
                            border: '5px dashed #55c2a6',
                            borderRadius: '50%',
                            p: 1.25, // Adds space between avatar and border
                            display: 'inline-block',
                        }}
                    >
                        <Avatar
                            src={MyPic}
                            alt="Sanchi Image"
                            sx={{ width: 160, height: 160 }}
                        />
                    </Box>
                </Grid2>
            </Grid2>

            {/* Bottom Section - Background Shape */}
            <Box
                sx={{
                    width: '100%',
                    height: '80px',
                    position: 'absolute',
                    bottom: '-71.5px',
                    left: 0,
                    clipPath: 'polygon(0 10%, 80% 100%, 100% 10%)',
                    bgcolor: '#fff',
                }}
            />
        </Box>
    )
}

export default Landing
