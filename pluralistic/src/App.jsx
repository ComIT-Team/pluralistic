//import { useState, useEffect } from 'react';
//import api from './api/axiosConfig';
//import './App.css';
 import { BrowserRouter as Router,Routes,  Route, } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Login from './components/signup/Login';
import SignUp from './components/signup/SignUp';

function App() {
 

  return (
    <>
     <div className='bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 bg-no-repeat text-white'>
      <Router>
        <Navbar/>
        <div className='container'>

        
<Routes>

<Route  path='/login' element={<Login/>}></Route>
<Route  path='/SignUp' element={<SignUp/>}></Route>
        
       
</Routes>
        
      
        
        </div>
      </Router>
      </div>
      
    </>
  )
}

export default App
