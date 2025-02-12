import './App.css';
import {button_changer} from './my_button_changer.js';
import Title from './titles.js';
 
const Messages = () => {
  return <h1>Hello mi gente!</h1>
}

const App = () => {
  
  const message = 'Hello World!';

  return (
    <div className="App">
      <h1> This is my title</h1>
      <Messages />  
      {message}
      <br></br>
      <Title color='red' message = "Hi" />
      <Title color='green'  message = "I am Carlos" />
      <Title color='blue' message = "I am learning React" />
      <br></br>
      <button id='buttonsin' onClick = {button_changer}> holi </button>
    </div>
  );  
}
export default App;
