import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// @ts-ignore
import { makeServer } from '../src/server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
