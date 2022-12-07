import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="centerHr">
        <hr className="ul" />
      </div>
      <About />
      <div className="centerHr">
        <hr className="ul" />
      </div>

      <Skills />
      <div className="centerHr">
        <hr className="ul" />
      </div>
      <Projects />
      <div className="centerHr">
        <hr className="ul" />
      </div>
      <Contact />
      <div className="centerHr">
        <hr className="ul" />
      </div>
      <Footer />
    </>
  );
};

export default App;
