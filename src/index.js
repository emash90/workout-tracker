import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<App />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

