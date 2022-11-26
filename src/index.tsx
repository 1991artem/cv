/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter} from 'react-router-dom'             //api
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
</BrowserRouter>,

);
