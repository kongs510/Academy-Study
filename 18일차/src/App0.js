import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Main from './router/Main';
import MemberDetail from './router/MemberDetail';
import NotMember from './router/NotMember';

const App = () => {
  return (    
    <Router>
       <Switch >
          <Route path={["/","/main"]} exact> <Main /> </Route>
          <Route path ="/member/:memberId" > <MemberDetail /> </Route> 
          <Route path="*" > <NotMember /> </Route>
       </Switch>
    </Router>
  );
};

export default App;