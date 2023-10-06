//import { useState, useEffect } from 'react';
//import api from './api/axiosConfig';
//import './App.css';
//import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <div>
       {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Navbar/>}>
        </Route>
       </Routes> */}
      </div>
      <div >
        <Navbar/>
      <Home/>
       
      </div>
    </>
  );
}

export default App;
