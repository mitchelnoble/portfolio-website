import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Landing from './screens/Landing/Landing'
import About from './screens/About/About'
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Contact from './screens/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/About">
          <About />
          </Route>
          <Route path="/ProjectDetail">
          <ProjectDetail />
          </Route>
        <Route path="/Contact">
        <Contact />
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
