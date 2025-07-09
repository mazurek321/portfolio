import React from 'react'
import "./Footer.css"
import { personalInfo, education} from "../../data/about";
import { HashLink as Link } from 'react-router-hash-link';

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
                <li><Link smooth to="/#MainContent">Home</Link></li>
                <li><Link smooth to="/#About">About</Link></li>
                <li><Link smooth to="/#Skills">Skills</Link></li>
                <li><Link smooth to="/#Experience">Experience</Link></li>
                <li><Link smooth to="/#Projects">Projects</Link></li>
                <li><Link smooth to="/#Contact">Contact</Link></li>
                <li><Link smooth to="/#Footer">CV</Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
