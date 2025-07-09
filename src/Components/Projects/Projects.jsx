import React from 'react'
import "./Projects.css"
import StyledButton from '../StyledButton/StyledButton'
import projects from "../../data/projects"
import { Link } from "react-router-dom";


const Projects = ({lightMode}) => {
  return (
    <div className={`container ${lightMode ? 'light' : 'dark'}`} id='Projects'>
      <h1>Projects</h1>
      <div className="list-of-projects">

        {projects.map((item, index) => (
          <div className="project" key={index}>
            <h4>{item.title}</h4>
            <p>{item.shortDescription}</p>
            <div className="technologies">
              <p>Technologies used</p>
               {item.technology.slice(0,5).map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
                {item.technology.length > 5 && <span>...</span>}
            </div>
          </div>
        ))}

      </div>
      <div className="button">
        
        <Link to="/projects">
          <StyledButton variant={'second'} lightMode={lightMode}></StyledButton>
        </Link>
      </div>
    </div>
  )
}

export default Projects
