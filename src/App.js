import './App.css';
import { Switch, Route } from 'react-router-dom'
import Landing from './screens/Landing/Landing'
import Contact from './screens/Contact/Contact'
import About from './screens/About/About'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Landing">
          <Landing />
        </Route>
        <Route path="/Contact">
        <Contact />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
