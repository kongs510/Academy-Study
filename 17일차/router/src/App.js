import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Sub3 from './components/Sub3';
import NotFile from './components/NotFile';

function App() {
  return (
    <div>
      <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
     <li><Link to="/profile">Profile</Link></li>
     <li><Link to="/sub3">Sub3</Link></li>
     <li><Link to="/sub4">Sub4</Link></li>
      </ul>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/sub3" component={Sub3}/>
      <Route path="*" component={NotFile}/>
      </Switch>
    </div>
  );
}

export default App;
