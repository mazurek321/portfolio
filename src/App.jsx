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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll')
    } else {
      const scrollTimeout = setTimeout(() => {
        document.body.classList.remove('no-scroll')
      }, 1800)

      return () => clearTimeout(scrollTimeout)
    }

    return () => document.body.classList.remove('no-scroll')
  }, [loading])

  return (
    <>
        <WelcomeLoader loading={loading} setLoading={setLoading}/>
    
        <Navbar loading={loading}/>
        <main>
          <Hero loading={loading}/>
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