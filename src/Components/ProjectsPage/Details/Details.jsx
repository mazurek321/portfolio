import React from 'react'
import "./Details.css"

const Details = ({lightMode, project}) => {
    if (!project) {
        return (
        <div className='details'>

        </div>
        );
    }


  return (
    <div className={`details ${lightMode ? '' : 'dark'}`}>
        <div className="top">
            {project?.title != null && (
                <header>
                    <h3>Project name</h3>
                    {project.title}
                </header>
            )}

        {project?.status != null && (
                <h3 className='status'>{project.status}</h3>
            )}
        </div>

        <hr />

        {project?.linkBE != null &&
            <h4 className='link'>Link to backend: <a href={project.linkBE} target='_blank'>{project.linkBE}</a></h4>
        }
        {project?.linkFE != null &&
            <h4 className='link'>Link to frontend: <a href={project.linkFE} target='_blank'>{project.linkFE}</a></h4>
        }
        {project?.link != null &&
            <h4 className='link'>Link: <a href={project.link} target='_blank'>{project.link}</a></h4>
        }

        {project?.longDescription != null ? (
            <div className="section">
                <h3>Description</h3>
                {project.longDescription}
            </div>
        ) : (
            project?.shortDescription != null && (
                <div className="section">
                    <h3>Description</h3>
                    {project.shortDescription}
                </div>
            )
        )}

        {project?.technology != null && (
            <div className="section">
                <h3>Technologies</h3>
                {
                    project.technology.map((tech, t) => (
                        <div className='technology' key={t}>
                            {tech}
                        </div>
                    ))
                }
            </div>
        )}

        {project?.sections?.length > 0 && (
            <div className="section">
                <h3>Features</h3>
                {
                    project.sections.map((feature, s) => (
                        <div className='sec' key={s}>
                            <h4>{feature.title}</h4>
                            <p>{feature.context}</p>
                                {feature.img?.length > 0 && (
                                    <details>
                                        <summary>Images</summary>
                                        <div className={`images ${project.type == 'mobile' && "mobile"}`}>
                                        {feature.img.map((image, index) => (
                                            <img src={image} alt={`${feature.title}`} key={index}/>
                                        ))}
                                    </div>
                                    </details>
                                )}
                        </div>
                    ))
                }
            </div>
        )}

        {project?.code != null && (
            <div className="section">
                <h3>Code example</h3>
                {
                    project.code.map((codes, c) => (
                        <details className='sec' key={c}>
                            <summary>{codes.title}</summary>
                            <div className="images">
                                  {codes.images && codes.images.map((img, i) => (
                                        <img src={img} key={i} className="code" />
                                    ))}
                            </div>  
                        </details>
                    ))
                }
            </div>
        )}

        
    </div>
  )
}

export default Details
