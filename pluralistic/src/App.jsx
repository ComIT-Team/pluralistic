import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom"
//import axios from 'axios'
import Login from './components/signup/Login';
import SignUp from './components/signup/SignUp';
import SellerLogin from './components/signup/SellerLogin'
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './pages/Cart';
//import { useEffect } from "react";

const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
function App() {
// useEffect(()=>{

//   fetch("http://localhost:86/api/v1/auth/login").then(resp => resp.text())
// .then(resp=>{
//   console.log('getting data: ' + resp)
// }) 
// }, [])
 const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
  <Route path="/home" element={<Home/>}></Route>
  <Route  path='/cart' element={<Cart/>}></Route>
<Route  path='/login' element={<Login/>}></Route>
<Route  path='/SignUp' element={<SignUp/>}></Route>
<Route  path='/products' element={<Products/>}></Route> 
<Route  path='/SignUp/seller' element={<SellerLogin/>}></Route> 
  </Route>
 ))

  return (
    <>
     <div className='bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 bg-no-repeat text-white font-bodyFont'>
     <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
