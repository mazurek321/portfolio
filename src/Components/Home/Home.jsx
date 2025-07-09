import React from 'react'
import MainContent from "../../Components/MainContent/MainContent"
import Navbar from "../../Components/Navbar/Navbar"
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = ({lightMode, setLightMode, setIsVisible, setNotification}) => {
  return (
    <>
        <Navbar lightMode = {lightMode} setLightMode = {setLightMode}/>
        <MainContent lightMode = {lightMode}/>
        <About lightMode={lightMode}/>
        <Skills lightMode={lightMode}/>
        <Experience lightMode={lightMode}/>
        <Projects lightMode={lightMode}/>
        <Contact lightMode={lightMode} setIsVisible={setIsVisible} setNotification={setNotification}/>
        <Footer lightMode={lightMode}/>
    </>
  )
}

export default Home
