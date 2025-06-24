// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your global CSS
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Keep BrowserRouter here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* This is the ONLY place BrowserRouter should be used */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();