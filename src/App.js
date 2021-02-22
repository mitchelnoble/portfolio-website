import './App.css';
import { Switch, Route } from 'react-router-dom'
import About from './screens/About/About'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import Resume from './screens/Resume/Resume'
import Contact from './screens/Contact/Contact'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Switch>
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
      </Switch>
    </div>
  );
}

export default App;
