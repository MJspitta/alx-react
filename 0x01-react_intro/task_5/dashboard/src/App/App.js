import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';
import holberton_logo from '../assets/holberton-logo.jpg';

function App() {
  const isIndex = false;

  return (
    <div className="App">
      <div className="App-header">
        <img src={holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='email-pass'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' />
          <button>OK</button>
        </div>
        
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </div>
    </div>
  );
}

export default App;
