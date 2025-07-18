import React from 'react'
import "./About.css"
import { aboutText, personalInfo, education, certificates, interests } from "../../data/about";
import useInView from '../../hooks/useInView';



const About = ({lightMode}) => {
  const [descRef, descVisible] = useInView();
  const [infRef, infVisible] = useInView();
  const [edRef, edVisible] = useInView();
  const [certRef, certVisible] = useInView();

  return (
    <div className={`container ${lightMode ? '' : 'dark'} `} id='About'>
      <h1>About me</h1>
      <div className="about-content flex" >
        <div className="border"></div>
         <div className={`content`}>
            
            <div className={`description ${descVisible ? 'visible' : ''}`} ref={descRef}>
              <h3>{aboutText.heading}</h3>
              <p>{aboutText.description}</p>
            </div>

            <div className="caffels flex">
              <div className={`caffel information ${infVisible ? 'visible' : ''}`} ref={infRef}>
                <h3>Information</h3>
                {personalInfo.map((info,index)=>(
                  <div className="information flex" key={index}>
                    <h4>{info.label}</h4>
                    <p>{info.value}</p>
                  </div>
                ))
                }
              </div>

              <div className={`caffel education ${edVisible ? 'visible' : ''}`} ref={edRef}>
                <h3>Education</h3>
                {education.map((ed, index)=>(
                  <div className="split" key={index}>
                    <div className="square"></div>
                    <div className="education">
                      <p>{ed.years}</p>
                      <h4>{ed.school}</h4>
                      <p className='major'>{ed.major}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`caffel certificates ${certVisible ? 'visible' : ''}`} ref={certRef}>
                <h3>Certificates</h3>
                 {certificates.map((cert, index)=>(
                  <div className="split" key={index}>
                    <div className="square"></div>
                    <div className="education">
                      <p>{cert.title}</p>
                      <p>{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>
         </div>
      </div>
    </div>
  )
}

export default About
