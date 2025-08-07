import React, { useEffect, useState } from 'react'
import Projects from "../Projects/Projects"
import { useLocation, useNavigate } from "react-router-dom"
import "./ProjectsPage.css"

const ProjectsPage = ({ lightMode }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = new URLSearchParams(location.search)
  const selectedParam = query.get("selected")

  const handleButtonClick = () => {
    navigate(`/`)
  }

  const [selectedIndex, setSelectedIndex] = useState(selectedParam ? Number(selectedParam) : 0)

  useEffect(() => {
    if (selectedIndex != null) {
      query.set("selected", selectedIndex)
      navigate(`${location.pathname}?${query.toString()}`, { replace: true })
    }
  }, [selectedIndex])

  return (
    <main>
      <div className="background">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <button className='go-back' onClick={handleButtonClick}>Go back</button>
      <Projects
        lightMode={lightMode}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        showDetailsOnTop={true}
      />
    </main>
  )
}

export default ProjectsPage
