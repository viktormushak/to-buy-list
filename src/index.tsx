import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from "./components/Navbar";
import Main from "./pages/main/Main";

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
