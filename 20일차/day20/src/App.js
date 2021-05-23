import logo from './logo.svg';
import './App.css';
import Color from './component/color/Color';
import Count from './component/count/Count';
import Todos from './component/todos/Todos';
import ChangeColor from './component/ChangeColor';

function App() {
  return (
    <div>
      <Color/>
      <hr/>
      <Count/>
      <hr/>
      <ChangeColor/>
      <hr/>
       <Todos/>
       <hr/>
    </div>
  );
}

export default App;
