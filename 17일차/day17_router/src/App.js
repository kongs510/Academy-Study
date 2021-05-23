import './App.css';import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Main from './router3/Main';
import MemberDetail from './router3/MemberDetail';
import NotMember from './router3/NotMember';



function App() {



  return (
    <Router>
      <Switch>
        <Route path={["/","/main"]} exact><Main/></Route>
        <Route path="/member/:memberId"><MemberDetail/></Route>
        <Route path="*"><NotMember/></Route>
      </Switch>
    </Router>
  );
}

export default App;
