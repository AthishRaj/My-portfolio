import './App.css'
import Nav from "./component/Nav";
import Welcome from "./component/Welcome";
import About from "./component/About";
import Education from './component/Education';
import Project from './component/Project';
import Contact from './component/Contact';
import Skills from './component/Skills';

export default function App() {
  return (
    <>
      <div className='bg-linear-to-l from-gray-900 from-50% to-gray-950 text-white'>
        <Nav />
        <Welcome />
        <About />
        <Education />
        <Skills/>
        <Project />
        <Contact/>
      </div>
    </>
  )
}