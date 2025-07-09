import React from 'react'
import "./Experience.css"

const Experience = ({lightMode}) => {
  return (
    <div className={`container ${lightMode ? 'light' : 'dark'}`} id='Experience'>
        <h1>Experience</h1>
        <div className="table">
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
