/* 
  The import statements import all required library in order for
  the website to work properly
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
  The render function below render the JSX components of our App
  which is the main component that contain all other component that
  also importing other components to be included into the pages.  
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If it is necessary to start measuring performance in this app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
