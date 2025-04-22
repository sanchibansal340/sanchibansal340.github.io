import React from 'react'
import { Box, Typography, Grid2, Avatar, useTheme } from '@mui/material'
import jsonData from './Landing.json'
import MyPic from '../../assets/my_img.png'

const Landing = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                position: 'relative',
                mt: 5,
            }}
        >
            {/* Main Grid2 */}
            <Grid2
                container
                columnSpacing={12}
                rowSpacing={6}
                sx={{ alignItems: 'center', maxWidth: '90%', mx: 'auto' }}
            >
                {/* Left Section - Text */}
                <Grid2 item xs={12} md={5} sx={{ mx: 'auto' }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Hi, I’m
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            color: 'primary.main',
                            lineHeight: 1.25,
                            fontFamily: theme.typography.fancy,
                        }}
                    >
                        Sanchi Bansal
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                        Turning coffee into code and ideas into reality! 🚀
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mt: 2, fontSize: '1.25rem' }}
                    >
                        I’m a Software Engineer specializing in all things web,{' '}
                        <br />
                        crafting digital magic with React, Python, and AWS.
                    </Typography>
                    {/* Links */}
                    <Box sx={{ mt: 5, fontSize: '1.25rem', fontWeight: 500 }}>
                        <Box sx={{ mb: '0.2rem' }}>
                            {jsonData.socials.map((social) => (
                                <Typography
                                    variant="h6"
                                    component="a"
                                    key={social.name}
                                    href={social.url}
                                    sx={{
                                        color: theme.palette.primary.dark,

                                        textShadow:
                                            '0px 0px 10px rgba(192, 240, 229, 0.8)',
                                        marginRight: '1rem',
                                        transition: 'color 0.4s ease',
                                        '&:hover': {
                                            color: theme.palette.secondary.main,
                                            textShadow:
                                                '0px 0px 10px rgba(240, 216, 192, 0.8)',
                                        },
                                    }}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    &#123;{social.name}&#125;
                                </Typography>
                            ))}
                        </Box>
                        <Typography variant="h6">
                            Email me at:{' '}
                            <Box
                                component="a"
                                href="mailto:sanchibansal340@gmail.com"
                                className="underline-animation"
                                sx={{
                                    color: theme.palette.primary.dark,
                                    '--underline-animation-color':
                                        theme.palette.secondary.main,
                                }}
                            >
                                sanchibansal340@gmail.com
                            </Box>
                        </Typography>
                    </Box>
                </Grid2>
                {/* <Grid2 xs={1} sx={{ mx: 'auto' }} /> */}
                {/* Right Section - Circular Image */}
                <Grid2
                    item
                    xs={12}
                    md={5}
                    display="flex"
                    justifyContent="center"
                    sx={{ mx: 'auto' }}
                >
                    <Box
                        sx={{
                            border: '5px dashed #55c2a6',
                            borderRadius: '50%',
                            p: 1.25,
                            display: 'inline-block',
                        }}
                    >
                        <Avatar
                            src={MyPic}
                            alt="Sanchi Image"
                            sx={{ width: 200, height: 200 }}
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
