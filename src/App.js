import logo from './logo.svg';
import './App.css';
import murray from './images/murray.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={murray} className="App-logo" alt="cat" />
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
