import React from 'react'
import "./Projects.css"
import { ProjectsData } from "../../data/ProjectsData"
import ProjectInterface from '../../data/ProjectInterface'

const Projects = () => {
  return (
    <section className='projects-section' id = "projects-section">
        <div>
            <div className="top-section">
                <h1 className='skills-title'>Projekty</h1>
            <button className="main-styled cold">
                Zobacz wszystko <span className="icon">→</span>
            </button>
        </div>
        
        <div className="projects-grid">
            {ProjectsData.slice(0, 6).map((project: ProjectInterface) => (
                <div className='project-card' key={project.id}>
                    <div className="project-thumb">
                        <img src={project.img} alt={project.title} />
                    </div>
                    
                    <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-actions">
                            <button className="btn-details">
                                Zobacz projekt <span className="icon">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
         </div>
        </div>
    </section>
  )
}

export default Projects