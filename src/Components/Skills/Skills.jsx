import React from 'react'
import "./Skills.css"
import {skills} from '../../data/skills';


const Skills = ({lightMode}) => {
  return (
    <div className={`container ${lightMode ? 'light' : 'dark'}`} id='Skills'>
      <h1>Skills</h1>
      <div className="list flex">
        
        {skills.map((section, index) => (
          <div className="section" key={index}>
            {section.items.map((skill, i) => (
              <div className="item" key={i}>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  title={skill.name}
                />
                <span>
                  {skill.name}
                </span>
              </div>
              
            ))}
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Skills
