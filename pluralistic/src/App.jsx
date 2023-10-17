//import { useState, useEffect } from 'react';
//import api from './api/axiosConfig';
//import './App.css';
 import { BrowserRouter as Router,Routes,  Route, } from 'react-router-dom';
import Login from './components/signup/Login';
import SignUp from './components/signup/SignUp';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/header/Header';
import Banner from './components/about/Banner';
import Footer from './components/footer/footer';
function App() {
 

  return (
    <>
     <div className='bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 bg-no-repeat text-white font-bodyFont'>
      <Router>
          <Header />
        <Banner/>
        <div className='container'>

        
<Routes>
<Route  path='/' element={<Home/>}></Route>
<Route  path='/login' element={<Login/>}></Route>
<Route  path='/SignUp' element={<SignUp/>}></Route>
<Route  path='/products' element={<Products/>}></Route>
        
       
</Routes>
        
      
        
        </div>
     <Footer/>
      </Router>
      </div>
      
    </>
  )
}

export default App
