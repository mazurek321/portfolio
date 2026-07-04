import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AllProjectsPage from './components/AllProjects/AllProjectsPage.js'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    

    <div className="space-container">
        <div className="space-scene">
          <div className="grid-layer" />
          <div className="stars-layer" />
        </div>

        <div className="nebula" />
              <Routes>

                <Route 
                  path = "/" 
                  index
                  element = {<App />}
                />

                <Route path="/projects" element={<AllProjectsPage />} />
                <Route path="/projects/:id" element={<AllProjectsPage />} />

              </Routes>
        
        </div>
  </HashRouter>,
)
