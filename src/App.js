import { Navbar, Landing, About } from './components'
import theme from './assets/theme'
import { ThemeProvider } from '@mui/material/styles'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar />
                <Landing />
                <About />
            </div>
        </ThemeProvider>
    )
}

export default App
