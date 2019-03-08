// import(/* webpackChunkName: 't' */ './t');
// import('./n');
// let aaa = 1;
// const promise = new Promise(function(resolve, reject) {
//   // ... some code
//   resolve({name: 1})
// });
// console.log(aaa);
import React from 'react';
import ReactDOM from 'react-dom';
import Td from './n.jsx';
import './assets/styles/reset.css';

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <Td />
  </div>,
  document.getElementById('root')
);
