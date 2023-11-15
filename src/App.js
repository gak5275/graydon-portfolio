import logo from './logo.svg';
import './App.css';
import murray from './images/murray.png';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Graydon Kupfer's Digital Portfolio</h1>
        <img src={murray} className="App-logo" alt="cat" />
        <MyButton />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
