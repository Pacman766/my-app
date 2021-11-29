import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const elem = (
  <div>
    <h2>Hello World!</h2>
    <input type="text" />
    <button>Click</button>
  </div>
);

ReactDOM.render(elem, document.getElementById('root'));
