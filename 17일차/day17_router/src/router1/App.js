import './App.css';import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './router1/Home';
import About from './router1/About';
import Front from './router1/Front';
import NotFile from './router1/NotFile';

function App() {
  const data=[
    {
      title:"html",
      info:"html에 대한 세부설명입니다."
    },
    {
      title:"css",
      info:"css에 대한 세부설명입니다."
    },
    {
      title:"javascript",
      info:"javascript 대한 세부설명입니다."
    },
    {
      title:"react",
      info:"react 대한 세부설명입니다."
    },
  ]


  return (
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/front">front</Link></li>
        <li><Link to="/front/html">Html</Link></li>
        <li><Link to="/front/css">css</Link></li>
        <li><Link to="/front/javascript">javascript</Link></li>
        <li><Link to="/front/react">react</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/front/:name"><Front data={data}/></Route>
        {/* <Route path="/front/:사용자정의변수"><Front/></Route> */}
        <Route path="*"><NotFile/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
