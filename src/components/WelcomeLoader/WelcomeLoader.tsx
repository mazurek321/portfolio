import React from 'react'
import "./WelcomeLoader.css"

const WelcomeLoader = () => {
  return (
    <div className='welcome-loader'>

      <div className="nebula" />

      <div className="content">
        <h1>Trwa wczytywanie portfolio.</h1>
      </div>
    </div>
  )
}

export default WelcomeLoader