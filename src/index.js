import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import 'animate.css';
import App from './container/App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
