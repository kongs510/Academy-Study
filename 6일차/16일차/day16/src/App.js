import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Plan from './components/plan/Plan';
import Main from './components/response/Main';


const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">main</a></li>
          <li><Link to="./plan">plan</Link></li>
          <li><Link to="./main">Main</Link></li>
          <li></li>
        </ul>
      </nav>
      {/* <Main/> */}
      <Route path="plan" component={Plan}/>
      <Route path="main" component={Main}/>
    </div>
  );
};

export default App;