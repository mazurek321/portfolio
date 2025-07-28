import React from 'react'
import "./Skills.css"
import {skills, skillColors} from '../../data/skills';
import useInView from '../../hooks/useInView';


const Skills = ({lightMode}) => {

  return (
    <div className={`container ${lightMode ? '' : 'dark'}`} id='Skills'>
      <h1>Skills</h1>
      <div className="list flex">
        
        {skills.map((section, index) => {

          const [ref, isVisible] = useInView();
          
          const animationClass =
            index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';

          return(
            <div className={`section ${animationClass} ${isVisible ? 'visible' : ''}`} key={index}  ref={ref}>
              <h2>{section.category}</h2>
              <div className="items">
                {section.items.map((skill, i) => {
                    const color = skillColors[skill.name] || "gray";

                    const style = {
                      border: `1px solid ${color}`,
                      boxShadow: `0 0 3px ${color}, 0 0 5px ${color}80, 0 0 10px ${color}75`,
                    };

                    return (
                      <div className="item" key={i} style={style}>
                        <img loading="lazy" src={skill.icon} alt={skill.name} title={skill.name} />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default Skills
