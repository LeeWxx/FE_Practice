import React from 'react';
import CounterContainer from './Chapter_17/Containers/CounterContainer';
import TodosContainer from './Chapter_17/Containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};


export default App;