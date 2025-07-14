import React, { useEffect, useState } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Leftnav from './Leftnav/Leftnav'
import Details from './Details/Details'
import projects from '../../data/projects';

const ProjectsPage = ({lightMode, setLightMode}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
       <Leftnav
          lightMode = {lightMode}
          setLightMode={setLightMode}
          projectTitles={projects.map(p => p.title)}
          onSelect={(index) => setSelectedIndex(index)}
          selectedIndex = {selectedIndex}
       />
       <Details lightMode = {lightMode} project={projects[selectedIndex]}/>
    </>
  )
}

export default ProjectsPage
