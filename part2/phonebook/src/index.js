import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import './index.css';

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    date: '2020-10-25T17:30:31.098Z'
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>,
  document.getElementById('root')
);


