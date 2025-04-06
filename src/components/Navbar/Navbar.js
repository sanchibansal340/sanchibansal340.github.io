import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NavButton from '../Buttons/NavButton'
import ResumeButton from '../Buttons/ResumeButton'

const sections = ['Home', 'About', 'Work', 'Contact', <ResumeButton />]

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const handleNavClick = (section) => {
        setActiveSection(section)
        // For mobile, close the drawer after selecting a section
        if (isMobile) setIsDrawerOpen(false)
    }

    const renderNavButtons = () =>
        sections.map((section) =>
            typeof section === 'string' ? (
                <NavButton
                    key={section}
                    active={activeSection === section ? 1 : 0}
                    onClick={() => handleNavClick(section)}
                    className={activeSection === section ? 'active' : ''}
                    disableRipple
                >
                    {section}
                </NavButton>
            ) : (
                section
            )
        )

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{ backgroundColor: 'white' }}
            >
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    {isMobile ? (
                        <>
                            {/* Hamburger Icon for mobile */}
                            <IconButton
                                onClick={() => setIsDrawerOpen(true)}
                                edge="start"
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </>
                    ) : (
                        // Render nav buttons on larger screens
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            {renderNavButtons()}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                PaperProps={{
                    sx: { width: '65%' },
                }}
                ModalProps={{
                    BackdropProps: {
                        sx: {
                            backdropFilter: 'blur(8px)',
                        },
                    },
                }}
            >
                <Box role="presentation">
                    <Box sx={{ textAlign: 'right', marginRight: 2, mt: 1 }}>
                        <IconButton
                            onClick={() => setIsDrawerOpen(false)}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <List sx={{ alignItems: 'center' }}>
                            {sections.map((section) => (
                                <ListItem key={section} disablePadding>
                                    {typeof section === 'string' ? (
                                        <ListItemButton
                                            onClick={() =>
                                                handleNavClick(section)
                                            }
                                        >
                                            <ListItemText primary={section} />
                                        </ListItemButton>
                                    ) : (
                                        section
                                    )}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default Navbar
