import Intro from "./components/Intro"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="font-poppins dark:bg-gray-900 bg-slate-100 w-full h-full overflow-hidden">
      <Navbar />
      <Intro />
    </div>
  )
}

export default App
