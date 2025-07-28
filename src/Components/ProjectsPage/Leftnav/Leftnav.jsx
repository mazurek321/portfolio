import React, { useState } from 'react'
import "./Leftnav.css"
import { Link } from "react-router-dom";

const Leftnav = ({lightMode, setLightMode, projectTitles, onSelect, selectedIndex}) => {
  const [hide, setHide] = useState(false);

  const handleLightModeChange = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    localStorage.setItem("lightMode", newMode);
  }
  
  return (
    <div className={`leftnav ${lightMode ? '' : 'dark'} ${hide ? 'hide' : ''}`}>
      <div className="back" onClick={()=>setHide(false)}></div>
      <div className="icons">
        <Link to="/" className='flex'>
          <span className="material-symbols-outlined">arrow_back_ios</span>
          Go back
        </Link>
        <div className="right">
          {/* <span className="material-symbols-outlined" onClick={handleLightModeChange}>dark_mode</span> */}
          <span className="material-symbols-outlined menuicon" onClick={()=>setHide(!hide)}>menu</span>
        </div>
      </div>
      <h4>Projects</h4>
      <ul>
        {
          projectTitles.map((title, index)=>(
            <li 
              key={index} 
              onClick={() => onSelect(index)} 
              className={`${selectedIndex == index ? 'active' : ''}`}  
            >{title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Leftnav
