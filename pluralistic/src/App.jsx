import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products'

function App() {
 

  return (
      <div >
        <Navbar/>
        <Products/>
       </div>
  )
}

export default App
