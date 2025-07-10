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
        {project?.title != null && (
            <header>
                <h3>Project name</h3>
                {project.title}
            </header>
        )}
        <hr />
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
                        </div>
                    ))
                }
            </div>
        )}

        
    </div>
  )
}

export default Details
