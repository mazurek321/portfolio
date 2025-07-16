import React from 'react'
import "./Experience.css"
import useInView from '../../hooks/useInView';

const Experience = ({lightMode}) => {
  const [ref, isVisible] = useInView(); 
  
  return (
    <div className={`container ${lightMode ? '' : 'dark'}`} id='Experience' ref={ref}>
        <h1>Experience</h1>
        <div className={`table ${isVisible ? 'visible' : ''}`}>
          <div className="corners"></div>
          <table>
            <tbody>
                <tr>
                    <th>Intership</th>
                    <td>
                        <h4>CetusPro</h4>
                        <span>Web application development using C# and the .NET platform</span>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>
    </div>
  )
}

export default Experience
