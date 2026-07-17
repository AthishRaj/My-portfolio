import "./App.css";
import Nav from "./component/Nav";
import Welcome from "./component/Welcome";
import About from "./component/About";
import Education from "./component/Education";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Skills from "./component/Skills2";
import Experience from "./component/Experience";
import ScrollToTop from "./component/ScrollToTop";
import Cursor from "./component/utils/Cursor";
import ThemeToggle from "./component/utils/ThemeToggle";
export default function App() {
  return (
    <>
      <div className="bg-linear-to-r from-[var(--bg-light)] to-[var(--bg-dark)] text-[var(--text)] overflow-x-hidden cursor-default">
        <div className="fixed top-5 left-5 z-50" >
          <ThemeToggle />
        </div>
        <Cursor />
        <Nav />
        <Welcome />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Education />
        <Contact />
        <ScrollToTop />
      </div>
    </>
  );
}
