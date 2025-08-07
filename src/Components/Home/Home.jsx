import React from 'react'
import "./Home.css"
import MainContent from "../../Components/MainContent/MainContent"
import Navbar from "../../Components/Navbar/Navbar"
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from 'react-router-dom';

const Home = ({lightMode, setLightMode, setIsVisible, setNotification}) => {

  const navigate = useNavigate()

  const handleProjectClick = (index) => {
    navigate(`/all-projects?selected=${index}`)
  }

  return (
    <>
        <Navbar lightMode = {lightMode} setLightMode = {setLightMode}/>
        <main>
          <div className="background">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <MainContent lightMode = {lightMode}/>
          <About lightMode={lightMode}/>
          <Skills lightMode={lightMode}/>
          <Experience lightMode={lightMode}/>
          <Projects lightMode={lightMode} pageSize = {6} onSelect={handleProjectClick}/>
          <Contact lightMode={lightMode} setIsVisible={setIsVisible} setNotification={setNotification}/>
          <Footer lightMode={lightMode}/>
        </main>
    </>
  )
}

export default Home
