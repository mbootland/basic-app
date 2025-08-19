import React from 'react';
import logo from './logo.svg';
import './App.css';

interface LinkProps{
  url: string;
}

function Link({ url }: LinkProps){
  return (
    <p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="App-link">
        Learn more about React
      </a>
    </p>
  );
};

function App(){
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link url="https://react.dev/" />
        </header>
      </div>
    </>
  );
};

export default App;
