import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
