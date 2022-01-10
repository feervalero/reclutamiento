import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App content">
      <Header />
      <Slider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today
        </a>
      </header>

      {/* 
        Header
        Slider
        Content
        Logo
        Beneficios
        Footer
      */}
    </div>
  );
}

export default App;
