import "./App.css";
import React from "react";
import Skills from "./screens/Skills/Skills";
import About from "./screens/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./screens/Contact/Contact";
import Music from "./screens/Music/Music";
import DrawerNav from "./components/Header/DrawerNav";
import Landing from "./screens/Landing/Landing";

function App() {
  return (
    <div className="App">
      <DrawerNav />

      <Landing />

      <Skills />

      <Projects />

      <About />

      <Music />

      <Contact />
    </div>
  );
}

export default App;
