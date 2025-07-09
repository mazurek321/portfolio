import React from 'react'

const WaveText = ({text}) => {
    const waveText = String(text)

  return (
    <h1 className="wave-text">
      {waveText.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            animation: 'wave 1s ease-in-out',
            animationDelay: `${i * 0.05}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  )
}

export default WaveText
