import React from 'react';
import './assets/css/App.css'

import { BrowserRouter } from 'react-router-dom';
import { Routes } from './router';

import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
