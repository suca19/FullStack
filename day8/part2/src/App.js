import './App.css';

const Title =(props) => {
  return <h1>{props.course}</h1>
}

const Paragraph =(para) => <p>{para.content} {para.number}</p>


function App() {

  
  return (
    <div className="App">
      <Title course="Half Stack application development" />
      <Paragraph content='Fundamentals of React' number={10} />
      <br></br>
      <Title course="Using props to pass data" />
      <Paragraph content='Using props to pass data' number={7} />
      <br></br>
      <Title course="State of a component" />
      <Paragraph content='State of a component' number={14} />
      <p>Number of exercises {Paragraph.number}</p>
    </div>
  );
}

export default App;
