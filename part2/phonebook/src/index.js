import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import './index.css';

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '0977777777'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '0978888888'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '0979999999'
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>,
  document.getElementById('root')
);


