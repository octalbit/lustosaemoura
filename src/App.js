import React from 'react';
import './assets/css/App.css'

import { BrowserRouter } from 'react-router-dom';
import { Routes } from './router';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      	<Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
