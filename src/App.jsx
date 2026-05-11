import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CustomCursor from "./components/CustomCursor"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Project from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <CustomCursor />
      <div className="aurora-bg">
        <div className="aurora-mesh"></div>
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </>
  )
}

export default App
