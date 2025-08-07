// Projects.jsx
import React from 'react'
import "./Projects.css"
import StyledButton from '../StyledButton/StyledButton'
import projects from "../../data/projects"
import { Link } from "react-router-dom"
import useInView from '../../hooks/useInView'

const Projects = ({ lightMode, pageSize, selectedIndex, onSelect, showDetailsOnTop }) => {
  const size = pageSize || projects.length
  const selectedProject = selectedIndex != null ? projects[selectedIndex] : null

  return (
    <div className={`container ${lightMode ? '' : 'dark'}`} id='Projects'>
      <h1>Projects</h1>

      {showDetailsOnTop && selectedProject && (
        <div className="selected-detail visible">
          <div className="top">
            <div className="main-text">
              <h2>{selectedProject.title} {selectedProject.status && <span className='status'>{selectedProject.status}</span>}</h2>
              <p>{selectedProject.longDescription || selectedProject.shortDescription}</p>

              <div className="link">
                {selectedProject.link && 
                  <div className="split">
                    <div className="square"></div>
                    <a href={`${selectedProject.link}`} target="_blank" rel="noopener noreferrer">Link</a>
                  </div>
                }
              </div>
              <div className="link">
                {selectedProject.linkBE && 
                  <div className="split">
                    <div className="square"></div>
                    <a href={`${selectedProject.linkBE}`} target="_blank" rel="noopener noreferrer">Link to backend</a>
                  </div>
                }
              </div>
              <div className="link">
                {selectedProject.linkFE && 
                  <div className="split">
                    <div className="square"></div>
                    <a href={`${selectedProject.linkFE}`} target="_blank" rel="noopener noreferrer">Link to frontend</a>
                  </div>
                }
              </div>
            </div>
          
            <div className="image">
              {selectedProject.mainImg && <img loading='lazy' src={selectedProject.mainImg} alt={selectedProject.title} />}
            </div>
          </div>

          <div className="bottom">
          {selectedProject.technology?.length > 0 && 
          
            <div className="tech-stack">
              <h3>Technologies</h3>
              <div>
                {selectedProject.technology?.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          }
          

            {selectedProject.sections?.length  > 0 && 
            
              <div className="features">
                <h3>Features</h3>
                <div>
                  {selectedProject.sections?.map((sec, i) => (
                    <div key={i}>
                      <p>{sec.title}</p>
                      <p>{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>
        
          }
           

           {selectedProject.code?.length >  0 &&
           
              <div className="code">
                <h3>Example code</h3>
                <div>
                  {selectedProject.code?.map((cod, i) => (
                    <div key={i}>
                      <details key={i}>
                        <summary>{cod.title}</summary>
                        {cod.images?.map((im, i) => (
                          <img loading='lazy' src={im} key={i} alt={`Code snippet ${i}`} />
                        ))}
                      </details>

                    </div>
                  ))}
                </div>
              </div>
           
           }

          {selectedProject.images?.length >  0 &&
           
              <div className="images">
                <h3>Images</h3>
                <div>
                    <details>
                      <summary>View images</summary>
                      {selectedProject.images?.map((im, i) => (
                        <img loading='lazy' src={im} key={i} alt={`Image ${i}`} />
                      ))}
                    </details>
                </div>
              </div>
           
           }

          </div>
        </div>
      )}

      <div className='list-of-projects'>
        {projects
          .filter((_, idx) => !showDetailsOnTop || idx !== selectedIndex)
          .slice(0, size)
          .map((item, index) => {
            const [ref, isVisible] = useInView()
            const directions = ['fade-in-left', 'fade-in-bottom', 'fade-in-right']
            const animationClass = directions[index % directions.length]

            return (
              <div
                className={`project ${animationClass} ${isVisible ? 'visible' : ''}`}
                key={item.id || index}
                ref={ref}
                onClick={() => onSelect?.(projects.indexOf(item))}
              >
                {item.mainImg && <img loading='lazy' src={item.mainImg} alt={item.title} />}
                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.shortDescription}</p>
                </div>
              </div>
            )
          })}
      </div>

      {pageSize && (
        <div className="button">
          <Link to="/all-projects">
            <StyledButton message={"See more"} variant={'second'} lightMode={lightMode} />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Projects
