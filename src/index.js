import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';




ReactDOM.render(
      <React.StrictMode>
      <Router>

            <Navbar />

            <Route exact path= '/'>
                  <div>snir</div>
            </Route>
            <Route exact path= '/התפריט-שלנו'>
            <App />
            </Route>
      </Router>
      </React.StrictMode>,
      document.getElementById('root')
);

