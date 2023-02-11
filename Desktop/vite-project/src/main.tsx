import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1';
import App2 from './App2';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
