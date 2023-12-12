import About from "./components/About"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {

  return (
    <div className="font-poppins dark:bg-gray-900 bg-slate-100 w-full h-full overflow-hidden">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App
