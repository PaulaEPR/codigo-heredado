import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './components/App';
import './styles/core/_reset.scss'

ReactDOM.render(
  <HashRouter >
  <App />
  </HashRouter>,

  document.getElementById('root')
);
