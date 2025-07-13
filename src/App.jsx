import { useEffect, useState } from "react";
import Notification from "./Components/Notification/Notification";

import Home from "./Components/Home/Home";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);


  
  useEffect(() => {
      const storedMode = localStorage.getItem("lightMode");
        if (storedMode !== null) {
          setLightMode(storedMode === "true");
        }
    }, []);

  return (
    <Router>
      {notification && (
        <Notification
          type={`${notification.type} ${isVisible ? 'visible' : ''}`}
          message={notification.message}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              lightMode={lightMode}
              setLightMode={setLightMode}
              setIsVisible={setIsVisible}
              setNotification={setNotification}
            />
          }
        />
        <Route path="/projects" element={
          <ProjectsPage  
            lightMode={lightMode}
            setLightMode={setLightMode}
          />} />
      </Routes>
    </Router>
  );
}

export default App
