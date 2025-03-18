import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    Button,
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
import NavButton from './NavButton'

const sections = ['Home', 'About', 'Skills', 'Work', 'Contact']

// Custom Button with zigzag underline on hover/active

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const handleNavClick = (section) => {
        setActiveSection(section)
        // For mobile, close the drawer after selecting a section
        if (isMobile) setIsDrawerOpen(false)
        // Optionally: scroll to section or update route here
    }

    const renderNavButtons = () =>
        sections.map((section) => (
            <NavButton
                key={section}
                active={activeSection === section ? 1 : 0}
                onClick={() => handleNavClick(section)}
                className={activeSection === section ? 'active' : ''}
                disableRipple
            >
                {section}
            </NavButton>
        ))

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
                anchor="top"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
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

                    <List>
                        {sections.map((section) => (
                            <ListItem key={section} disablePadding>
                                <ListItemButton
                                    onClick={() => handleNavClick(section)}
                                >
                                    <ListItemText primary={section} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Navbar
