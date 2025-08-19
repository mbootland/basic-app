import React from 'react';
import logo from './logo.svg';
import './App.css';

interface LinkProps{
  url: string;
  description: string;
}

function Link({ url, description }: LinkProps){
  return (
    <p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="App-link">
        { description }
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
          <Link url="https://react.dev/" description="Learn More about React" />
          <Link url="https://www.google.com/" description="Google some shit" />
        </header>
      </div>
    </>
  );
};

export default App;
