import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //strict mode was commented out so the drag-and-drop feature can run in dev mode

  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

