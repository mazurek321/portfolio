import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>

      <Route 
        path = "/" 
        index
        element = {<App />}
      />

    </Routes>
  </HashRouter>,
)
