//import { useState, useEffect } from 'react';
//import api from './api/axiosConfig';
//import './App.css';
 import { BrowserRouter as Router,Routes,  Route, } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import Login from './components/signup/Login';
import SignUp from './components/signup/SignUp';

function App() {
 

  return (
    <>
     
      <Router>
        <Navbar/>
        <div>

        
<Routes>
<Route exact path='/' element={<Home/>}></Route>
<Route  path='/login' element={<Login/>}></Route>
<Route  path='/SignUp' element={<SignUp/>}></Route>
        
       
</Routes>
        
      
        
        </div>
      </Router>
       
      {/* <Navbar/>
      <Login/>
       */}
    </>
  )
}

export default App
