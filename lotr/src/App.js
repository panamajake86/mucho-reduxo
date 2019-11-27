import React from 'react';
import tree from './images/tree.png';
import './App.css';
import axios from 'axios';



function App() {

  const header = `31rkX6UJLAHpQUT3cUZa`;

  React.useEffect(() => {
    axios
      .get('https://the-one-api.herokuapp.com/v1/quote', {
        headers: {
          Authorization: `Bearer ${header}`,
        },
      })
      .then(res => console.log(res.data.docs[1749].dialog))
      .catch(err => console.log(err))
  }, [])
  
  return (
    
    < div className = "App" >
      
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
    </div >
  );
}

export default App;
