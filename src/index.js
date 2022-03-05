import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { PRIMARY_COLOR, TEXT_COLOR } from 'constants/color'
import App from './App'

const theme = createTheme({
  typography: {
    fontFamily: "'Be Vietnam Pro',sans-serif",
    fontSize: 14,
  },
  palette: {
    primary: {
      main: `${PRIMARY_COLOR}`,
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: `${TEXT_COLOR}`,
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
