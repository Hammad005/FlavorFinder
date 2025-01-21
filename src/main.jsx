import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/merriweather"; // Merriweather font
import "@fontsource/dancing-script"; // Dancing Script font
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
