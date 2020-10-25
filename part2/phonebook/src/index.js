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
]

ReactDOM.render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>,
  document.getElementById('root')
);


