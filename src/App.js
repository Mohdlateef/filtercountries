import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import countries from './components/Data';
import Data from './components/Search';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <Data countries={countries}/>
    </div>
  );
}

export default App;
