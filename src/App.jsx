import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WelcomeLoader from './components/WelcomeLoader/WelcomeLoader';

const modelPreloadPath = new URL('/modelEmpty.glb', import.meta.url).href;

function App() {
  const [isCached, setIsCached] = useState(() => {
    return localStorage.getItem('model_cached') === 'true';
  });
  
  const [modelLoaded, setModelLoaded] = useState(isCached);
  const [minTimeDone, setMinTimeDone] = useState(isCached);

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
          if (response) {
            setIsCached(true);
            setModelLoaded(true);
            setMinTimeDone(true);
            localStorage.setItem('model_cached', 'true');
          } else {
            fetch(modelPreloadPath).then((fetchResponse) => {
              if (fetchResponse.ok) {
                cache.put(modelPreloadPath, fetchResponse.clone());
                localStorage.setItem('model_cached', 'true');
              }
            }).catch(() => {
              setModelLoaded(true);
            });
          }
        });
      });
    } else {
      setModelLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isCached) return;

    const timer = setTimeout(() => {
      setMinTimeDone(true);
    }, 1500);

    const fallbackTimer = setTimeout(() => {
      setModelLoaded(true);
      setMinTimeDone(true);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [isCached]);

  const showLoader = !isCached && (!modelLoaded || !minTimeDone);

  useEffect(() => {
    if (showLoader) {
      document.body.classList.add('no-scroll');
    } else {
      const scrollTimeout = setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 500);
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
        <WelcomeLoader loading={showLoader} setLoading={() => {}} />
      )}
    
      <Navbar loading={showLoader} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero loading={showLoader} />
        <About setModelLoaded={() => {
          setModelLoaded(true);
          localStorage.setItem('model_cached', 'true');
        }} />
        <Skills />
        <Projects />
        <Contact />
      </main>  
      <Footer />
    </>
  );
}

export default App;