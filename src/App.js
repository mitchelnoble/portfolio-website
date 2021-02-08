import './App.css';
import { Switch, Route } from 'react-router-dom'
import Landing from './screens/Landing/Landing'
import About from './screens/About/About'
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Contact from './screens/Contact/Contact'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
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
          </Layout>
      </Switch>
    </div>
  );
}

export default App;
