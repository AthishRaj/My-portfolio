import './App.css'
import Nav from "./component/Nav";
import Welcome from "./component/Welcome";
import About from "./component/About";
import Education from './component/Education';
import Project from './component/Project';
import Contact from './component/Contact';
import Skills from './component/Skills2';
import Experience from './component/Experience';

export default function App() {
  return (
    <>
      <div className='bg-linear-to-r from-gray-900 to-gray-950 text-white overflow-x-hidden cursor-default'>
        <Nav />
        <Welcome />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Education />
        <Contact/>
      </div>
    </>
  )
}