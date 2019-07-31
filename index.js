import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app'
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';




render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
