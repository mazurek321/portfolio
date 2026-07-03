import React from 'react'
import "./Hero.css"
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; 

const Hero: React.FC = () => {
  const handleOpenCV = () => {
    window.open('/data/__CV-Bartlomiej-Mazurkiewicz.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className='hero-section'>
        <div>
          <div className="hero-left">
            <div className="upper-icon">
              ✦ Portfolio
            </div>
            <h1>
              Witaj na{" "}
              <span>mojej</span>
              {" "}stronie Internetowej  
            </h1>

            <div className="desc">
              To moje portfolio — znajdziesz tutaj projekty, które stworzyłem, technologie, z których korzystam na co dzień, oraz trochę informacji o mnie.
            </div>

            <div className="button">
              <button className='main-styled warm' onClick={handleOpenCV}>
                Wyświetl CV
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-orbit-container">
                <div className="orbit-line" />
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orbit-cube-wrapper"
                >
                  <div className="cube-face face-front"><FaGithub /></div>
                  <div className="cube-face face-back"><FaGithub /></div>
                  <div className="cube-face face-left"><FaGithub /></div>
                  <div className="cube-face face-right"><FaGithub /></div>
                  <div className="cube-face face-top"><FaGithub /></div>
                  <div className="cube-face face-bottom"><FaGithub /></div>
                </motion.a>
                <div className="orbit-center">
                  <div className="center-pulse" />
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Hero