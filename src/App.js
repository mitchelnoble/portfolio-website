import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import About from './screens/About/About'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import Resume from './screens/Resume/Resume'
import Contact from './screens/Contact/Contact'
import Music from './screens/Music/Music'

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <ProjectDetail />
        <Resume />
        <Contact />
        <Music />
    </div>
  );
}

export default App;
