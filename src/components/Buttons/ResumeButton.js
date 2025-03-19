import { Button, useTheme } from '@mui/material'
import React from 'react'

function ResumeButton() {
    const theme = useTheme()
    return (
        <Button
            variant="contained"
            color="secondary"
            sx={{
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: '1px',
                boxShadow: 'none',
                border: '3px solid transparent',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    color: '#333',
                    border: `3px solid ${theme.palette.secondary.main}`,
                    backgroundColor: 'inherit',
                    boxShadow: 'none',
                },
            }}
        >
            Resume
        </Button>
    )
}

export default ResumeButton
