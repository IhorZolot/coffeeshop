import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<App />
	</ThemeProvider>
)
