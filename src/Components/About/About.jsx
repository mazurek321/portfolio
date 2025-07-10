import React from 'react'
import "./About.css"
import img from "../../assets/img/img2.webp"
import { aboutText, personalInfo, education, certificates, interests } from "../../data/about";


const About = ({lightMode}) => {

  return (
    <div className={`container ${lightMode ? 'light' : 'dark'}`} id='About'>
      <h1>About me</h1>
      <div className="about-content flex" >

          <div className="image">
            <img src={img} alt="Image photo" />
          </div>
          
          <div className="panel-bottom flex">
            <div className="description">
              <h4>{aboutText.heading}</h4>
              <p>
                {aboutText.description}
              </p>
            </div>
            
           <div className="caffels">

            <div className="caffel">
              <div className="cover">
                <div className="cover-title">
                  <span className="material-symbols-outlined">person</span>
                  <p>Information</p>
                </div>
                <span className="material-symbols-outlined arrow">arrow_upward</span>
              </div>
              <div className="content">

              <table>
                <tbody>
                  {personalInfo.map((item) => (
                    <tr key={item.label}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              </div>
            </div>

              <div className="caffel">
                <div className="cover">
                  <div className="cover-title">
                    <span className="material-symbols-outlined">school</span>
                    <p>Education</p>
                  </div>
                  <span className="material-symbols-outlined arrow">arrow_upward</span>
                </div>
                <div className="content">
                  {education.map((item, index)=>(
                    <div className="split flex" key={index}>
                      <div className="square"></div>
                      <div className="education-content">
                        <span>{item.years}</span>
                        <h5>{item.school}</h5>
                        <span>{item.major}</span>
                      </div>
                    </div>
                  ))}

                  <h5>Certificates</h5>
                  {certificates.map((item, index)=>(
                    <div className="split flex" key={index}>
                      <div className="square"></div>
                      <div className="education-content">
                        <h5>{item.title}</h5>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
              <div className="caffel">
                <div className="cover">
                  <div className="cover-title">
                    <span className="material-symbols-outlined">interests</span>
                    <p>Interests</p>
                  </div>
                  <span className="material-symbols-outlined arrow">arrow_upward</span>
                </div>
                <div className="content">    
                  <ul>
                    {interests.map((interest) => (
                      <li key={interest}>{interest}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
