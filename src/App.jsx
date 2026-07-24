import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import WelcomeLoader from './components/WelcomeLoader/WelcomeLoader'

const modelPreloadPath = new URL('/modelEmpty.glb', import.meta.url).href;

function App() {
  const [hasLoadedBefore] = useState(() => {
    return sessionStorage.getItem('hasSeenLoader') === 'true';
  });

  const [loading, setLoading] = useState(!hasLoadedBefore);
  const [minTimeDone, setMinTimeDone] = useState(hasLoadedBefore);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if ('caches' in window) {
      caches.open('3d-models-cache').then((cache) => {
        cache.match(modelPreloadPath).then((response) => {
          if (!response) {
            fetch(modelPreloadPath).then((fetchResponse) => {
              cache.put(modelPreloadPath, fetchResponse);
            });
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    if (hasLoadedBefore) return;

    const timer = setTimeout(() => {
      setMinTimeDone(true);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 2000);

    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [hasLoadedBefore]);

  const showLoader = !hasLoadedBefore && (loading || !minTimeDone);

  useEffect(() => {
    if (showLoader) {
      document.body.classList.add('no-scroll');
    } else {
      const scrollTimeout = setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 1200);

      return () => clearTimeout(scrollTimeout);
    }

    return () => document.body.classList.remove('no-scroll');
  }, [showLoader]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {showLoader && (
        <WelcomeLoader loading={showLoader} setLoading={setLoading} />
      )}
    
      <Navbar loading={showLoader} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero loading={showLoader} />
        <About setLoading={setLoading} />
        <Skills />
        <Projects />
        <Contact />
      </main>  
      <Footer />
    </>
  );
}

export default App;