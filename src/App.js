import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './screens/About/About'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import Resume from './screens/Resume/Resume'
import Contact from './screens/Contact/Contact'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Switch>
        <ScrollToTop>
        <Layout>
        <Route exact path="/">
          <About />
            </Route>
          <Route path="/ProjectDetail">
            <ProjectDetail />
          </Route>
          <Route path="/Resume">
        <Resume />
          </Route>
        <Route path="/Contact">
        <Contact />
          </Route>
          </Layout>
        </ScrollToTop>
      </Switch>
    </div>
  );
}

export default App;
