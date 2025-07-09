import React from 'react'
import "./MainContent.css"
import inst from "../../assets/icons/Instagram_icon.png"
import facebook from "../../assets/icons/Facebook_Logo.png"
import github from "../../assets/icons/Github_icon.png"
import WaveText from './WaveText'
import StyledButton from '../StyledButton/StyledButton'
import img from "../../assets/img/img.webp"
import { HashLink as Link } from 'react-router-hash-link';

const MainContent = ({lightMode}) => {
  return (
    <div className={`flex container ${lightMode ? 'light' : 'dark'}`} id='MainContent'>
        <div className="left">
            <section>
                <h4>Hi, I'm Bartek</h4>
                <WaveText text="Welcome to my website !"/>
                <h3>I'm a full-stack developer</h3>
                <div className="icons flex">
                    <a href="https://www.instagram.com/_bartekmazurkiewicz/" target='_blank'><img src={inst} alt="Instagram account" /></a>
                    <a href="https://www.facebook.com/bartekmz" target='_blank'><img src={facebook} alt="Facebook account" /></a>
                    <a href="https://github.com/mazurek321" target='_blank'><img src={github} alt="Github account" /></a>
                </div>
                <div className="button">
                  <Link smooth to="/#Projects">
                    <StyledButton 
                      variant={'first'} 
                      lightMode={lightMode}
                    >
                    </StyledButton>
                  </Link>
                </div>
            </section>
        </div>
        <div className="right">
          <div className="image">
            <img src={img} alt="Main Image" />
          </div>
        </div>
         <div className="right-background"></div>
    </div>
  )
}

export default MainContent
