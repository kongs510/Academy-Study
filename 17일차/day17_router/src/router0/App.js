import logo from './logo.svg';
import './App.css';import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import About from './router0/About';
import Profile from './router0/Profile';
import NotFile from './router0/NotFile';
import Home from './router0/Home';
function App() {
  return (
    <Router>
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/profile">profile</Link></li>
      </ul>
   {/* 화면에 보이는 부분 */}
   <Switch>    
    <Route path="/" exact><Home/></Route>
    <Route path="/about"><About/></Route>
    <Route path="/profile"><Profile/></Route>
    <Route path="*"><NotFile/></Route>
   </Switch>
    </div>
    </Router>
  );
}

export default App;
// // 기본방법
// <Switch>    
// <Route path="/" exact component={Home} />
// <Route path="/about" component={About} />
// <Route path="/profile" component={Profile} />
// <Route path="*" component={NotFile} />
// </Switch>