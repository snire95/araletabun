import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connect from './connect';
import AboutPage from './Pags/AboutPage';
import ManagerPage from './Pags/ManagerPage';
import HomePage from './Pags/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';




ReactDOM.render(
      <React.StrictMode>
      <Router>
            <Navbar />
            <Route exact path= '/'>
                  <HomePage/>
            </Route>

            <Route exact path= '/צור-קשר'>
                  <Connect />
            </Route>   
            <Route exact path= '/התפריט-שלנו'>
                  <App />
            </Route>            
            <Route exact path= '/קצת-עלינו'>
                  <AboutPage />
            </Route>
            <Route exact path= '/S'>
                  <ManagerPage />
            </Route> 
      </Router>
      </React.StrictMode>,
      document.getElementById('root')
);

