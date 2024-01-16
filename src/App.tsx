import { useEffect, useRef, useState } from 'react'
import './App.css'
import Loader from './components/Loader/Loader'
import Nav from './components/Nav/Nav'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import { BentoGrid } from './components/BentoGrid/BentoGrid'
import Footer from './components/Footer/Footer'

function App() {
  const [loaderVisible, setLoaderVisible] = useState(false);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef= useRef(null)
    
  useEffect(() => {
    if(loaderVisible){
      const timer = setTimeout(() => {
        setLoaderVisible(false);
      }, 1000); // Hide the loader after 1 second
  
      return () => clearTimeout(timer);
    }
  }, [loaderVisible]);

  return (
    <div className='flex flex-col bg-light h-fit'>
      <Loader isVisible={loaderVisible}/>
      <div className=' md:mx-auto px-4 lg:px-1 max-w-screen-xl'>
        <Nav setLoaderVisible={setLoaderVisible} projectsRef={projectsRef} homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef}/>
        <BentoGrid />
        <Home ref={homeRef} />
        <Projects ref={projectsRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  )
}

export default App
