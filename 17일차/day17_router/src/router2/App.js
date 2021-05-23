import './App.css';import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './router2/Home';
import About from './router2/About';
import Profile from './router2/Profile';
import NotFile from './router2/NotFile';


function App() {



  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/profile">profile</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/profile"><Profile/></Route>
        <Route path="*"><NotFile/></Route>
      </Switch>
    </Router>
  );
}

export default App;
