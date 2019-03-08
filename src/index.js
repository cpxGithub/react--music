/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Td from './n.jsx';
import './assets/styles/reset.css';

import(/* webpackChunkName: 't' */ './t');
import('./n');
let aaa = 1;
new Promise(function(resolve, reject) {
  // ... some code
  resolve({name: 1});
});
console.log(aaa);
console.log(process.env.NODE_ENV);
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <Td />
  </div>,
  document.getElementById('root')
);
