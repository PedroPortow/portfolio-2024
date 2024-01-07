import './App.css'
import Nav from './components/Nav/Nav'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

function App() {

  return (
    <div className='flex flex-col bg-light h-fit'>
      <div className='md:container md:mx-auto px-12'>
        <Nav />
        <Home />
        <Projects />
        <About />
      </div>
    </div>
  )
}

export default App
