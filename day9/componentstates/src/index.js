import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  const [counterValue, updateCounter] = useState(13);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCounter(prevCounter => prevCounter + 1);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval when unmounting
  }, []); // Runs only once on mount

  console.log('render');

  return (
    <div> 
      <p>The counter is</p>
      <h1>{counterValue}</h1>
      <button onClick={() => updateCounter(counterValue + 1)}>Increase</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
