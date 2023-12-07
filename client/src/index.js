import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bingo from './components/Bingo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bingo/>
  </React.StrictMode>
);
