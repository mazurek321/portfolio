import React from 'react'
import "./Footer.css"
import { personalInfo, education} from "../../data/about";


const Footer = ({lightMode}) => {
  return (
    <footer className={`container flex ${lightMode ? 'light' : 'dark'}`} id='Footer'>
        <div className="left">
            <h3>Information</h3>
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
        <div className="middle">
            <h3>CV</h3>
            <a href="/data/[en]CV-Bartlomiej-Mazurkiewicz.pdf" download>[ en ] Download my CV</a>
            <a href="/data/[pl]CV-Bartlomiej-Mazurkiewicz.pdf" download>[ pl ] Download my CV</a>
        </div>
        <div className="right">
            <h3>Navigation</h3>
             <ul>
                <li><a href="#MainContent">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Footer">CV</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
