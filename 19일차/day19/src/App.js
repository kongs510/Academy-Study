import React from 'react';
import ChangeColor from './components/changecolor/ChangeColor';
import Color from './components/color/Color';
import Count from './components/count/Count';
import Tasks from './components/tasks/Tasks';
import Todos from './components/todos/Todos';
import ChangeColorProvier from './contexts/ChangeColorContext';
import ColorProvier from './contexts/ColorContext';
import CountProvier from './contexts/CountContext';
import TesksProvider from './contexts/TesksContext';
import TodosProvider from './contexts/TodosContext';

const App = () => {
  return (
    <div>      
      <CountProvier>
        <Count />
      </CountProvier>

      <hr/>

      <ColorProvier>
          <Color />
      </ColorProvier>
      <hr/>

    <ChangeColorProvier>
      <ChangeColor />
    </ChangeColorProvier>

    <hr/>
    <TodosProvider>
    <Todos/>
    </TodosProvider>
    <hr/>
    <TesksProvider>    
    <Tasks/>
    </TesksProvider>

    </div>
  );
};

export default App;

