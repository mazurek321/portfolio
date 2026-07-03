import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
      <div className="space-container">
        <div className="space-scene">
          <div className="grid-layer" />
          <div className="stars-layer" />
        </div>

        <div className="nebula" />

        <Navbar/>
        <main>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>  
        <Footer/>
          
      </div>
    </>
  )
}

export default App
