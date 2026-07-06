import React, { useEffect, useState } from 'react'
import "./WelcomeLoader.css"

interface WelcomeLoaderProps {
  loading: boolean
  setLoading: (value: boolean) => void
}

const WelcomeLoader: React.FC<WelcomeLoaderProps> = ({ loading, setLoading }) => {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (!loading) {
      setFadeOut(true)

      const t = setTimeout(() => {
        setVisible(false)
      }, 1200)

      return () => clearTimeout(t)
    }
  }, [loading])

  if (!visible) return null

  return (
    <div className={`welcome-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="nebula"></div>
      <div className="cyber-grid-bg">
        <div className="grid-lines"></div>
        <div className="horizon-glow"></div>
      </div>
      <div className="content">
        <div className="header">
          <h1>
            Witaj na mojej <span className="styled">stronie Internetowej</span>
          </h1>
        </div>
        
        <div className="spinner-container">
          <svg className="spinner-svg" viewBox="0 0 50 50">
            <circle className="spinner-track" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
            <circle className="spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
          </svg>
        </div>

        <h2>Trwa ładowanie portfolio</h2>
      </div>
    </div>
  )
}

export default WelcomeLoader