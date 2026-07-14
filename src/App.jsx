import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import WelcomeLoader from './components/WelcomeLoader/WelcomeLoader'

function App() {
  const [loading, setLoading] = useState(true)
  const [minTimeDone, setMinTimeDone] = useState(false)
   const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('theme');
      let useDark = true;
  
      if (savedTheme) {
        useDark = savedTheme === 'dark';
      } else {
        useDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
  
      if (useDark) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
  
      return useDark;
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeDone(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const showLoader = loading || !minTimeDone

  useEffect(() => {
    if (showLoader) {
      document.body.classList.add('no-scroll')
    } else {
      const scrollTimeout = setTimeout(() => {
        document.body.classList.remove('no-scroll')
      }, 1200)

      return () => clearTimeout(scrollTimeout)
    }

    return () => document.body.classList.remove('no-scroll')
  }, [showLoader])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <WelcomeLoader loading={showLoader} setLoading={setLoading}/>
    
      <Navbar loading={showLoader} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <main>
        <Hero loading={showLoader}/>
        <About setLoading={setLoading}/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>  
      <Footer/>
    </>
  )
}

export default App
