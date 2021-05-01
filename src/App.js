import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Skills from "./screens/Skills/Skills";
import About from "./screens/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./screens/Resume/Resume";
import Contact from "./screens/Contact/Contact";
import Music from "./screens/Music/Music";

function App() {
  return (
    <div className="App">
      <Header />

      <About />
      
      <Skills />

      <Projects />
      
      <Resume />
      
      <Music />
      
      <Contact />
      
    </div>
  );
}

export default App;
