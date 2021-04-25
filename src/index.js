import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import stores from './stores';
import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
