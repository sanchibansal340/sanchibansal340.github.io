import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#55C2A6',
            dark: '#399E85',
        },
        secondary: {
            main: '#3B90A0',
        },
    },
    typography: {
        fontFamily: 'Questrial, serif',
        fancy: 'Cedarville Cursive, serif',
        button: {
            textTransform: 'none',
        },
    },
})

export default theme
