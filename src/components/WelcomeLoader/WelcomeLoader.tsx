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
      <div className="content">
        <div className="header">
          <h1>Witaj na mojej</h1>
          <h1 className='styled'>stronie Internetowej</h1>
        </div>

        <h2>Trwa ładowanie portfolio</h2>
      </div>
    </div>
  )
}

export default WelcomeLoader