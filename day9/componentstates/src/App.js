import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = (props) => {
  
  const [counterValue, updateCounter] = useState(13);

  /*const counterValue = counter[0];
  const updateCounter = counter[1];*/

 setInterval (() => {
    updateCounter(counterValue + 1);
  }, 2000); 

  console.log(counterValue);
  
  return (
    <div> 
      <p>the couner is</p>
      <h1>{counterValue}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
