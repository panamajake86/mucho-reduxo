import React from 'react';
import tree from './images/tree.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />
        <p>
          Fuck bitches, get money.
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
