//import { useState, useEffect } from 'react';
//import api from './api/axiosConfig';
//import './App.css';
//import {Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import Login from './components/signup/Login';
//import SignUp from './components/signup/SignUp';

function App() {
 

  return (
    <>
     
      {/* <Router>
        <Navbar/>
        
        <Routes>
<Route exact path='/' element={<Home/>}></Route>
<Route  path='/login' element={<Login/>}></Route>
        
       
      
        </Routes>
      
      </Router> */}
       
      <Navbar/>
      <Login/>
      
    </>
  )
}

export default App
