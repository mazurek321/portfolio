import React from 'react'
import "./Projects.css"
import StyledButton from '../StyledButton/StyledButton'
import projects from "../../data/projects"
import { Link } from "react-router-dom";
import useInView from '../../hooks/useInView';



const Projects = ({lightMode}) => {
  const [ref, isVisible] = useInView(); 

  return (
    <div className={`container ${lightMode ? '' : 'dark'}`} id='Projects'  ref={ref}>
      <h1>Projects</h1>
      <div className={`list-of-projects ${isVisible ? 'visible' : ''}`} >

        {projects.slice(0,3).map((item, index) => (
          <div className="project" key={index}>
            <h4>{item.title}</h4>
            <p>{item.shortDescription}</p>
            <div className="technologies">
              <p>Technologies</p>
               {item.technology.slice(0,5).map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
                {item.technology.length > 5 && <span>...</span>}
            </div>
          </div>
        ))}

      </div>
      <div className={`button ${isVisible ? 'visible' : ''}`}>
        
        <Link to="/projects">
          <StyledButton variant={'second'} lightMode={lightMode}></StyledButton>
        </Link>
      </div>
    </div>
  )
}

export default Projects
