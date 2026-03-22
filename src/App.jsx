import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Milestones} from "@/sections/Milestones";
import {Contact} from "@/sections/Contact";
import {Footer} from "@/layout/Footer";
function App() {
  return(
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Milestones/>
        <Contact/> 
      </main>
      <Footer/>
    </div>
  )
}

export default App
