import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="font-poppins dark:bg-gray-900 bg-slate-100 w-full h-full overflow-hidden">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
