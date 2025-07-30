import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ✅ this is where Tailwind comes in
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
