import React from 'react'
import "./Projects.css"
import StyledButton from '../StyledButton/StyledButton'
import projects from "../../data/projects"
import { Link } from "react-router-dom";
import useInView from '../../hooks/useInView';



const Projects = ({lightMode}) => {

  return (
    <div className={`container ${lightMode ? '' : 'dark'}`} id='Projects'>
      <h1>Projects</h1>
      <div className='list-of-projects' >

        {projects.slice(0,6).map((item, index) => {
          
          const [ref, isVisible] = useInView(); 
          const directions = ['fade-in-left', 'fade-in-bottom', 'fade-in-right'];
          const animationClass = directions[index % directions.length];

          return(
            <div className={`project ${animationClass} ${isVisible ? 'visible' : ''}`} key={index} ref={ref}>
              {item.mainImg &&
                <img src={item.mainImg} alt="Main image of project" />
              }
              
              <div className="text">
                <h4>{item.title}</h4>
                <p>{item.shortDescription}</p>
              </div>

            </div>
          )
      })}

      </div>
      <div className={`button`}>
        
        <Link to="/projects">
          <StyledButton message={"See more"} variant={'second'} lightMode={lightMode}></StyledButton>
        </Link>
      </div>
    </div>
  )
}

export default Projects
