import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            light: '#79d6bf',
            main: '#55C2A6',
            dark: '#399E85',
        },
        secondary: {
            main: '#F29251',
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
