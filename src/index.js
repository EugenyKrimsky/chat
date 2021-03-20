import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'modern-css-reset'
import state from './state/state';


ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
