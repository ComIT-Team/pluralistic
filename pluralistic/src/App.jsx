import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom"

import Login from './components/signup/Login';
import SignUp from './components/signup/SignUp';
import SellerLogin from './components/signup/SellerLogin'
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Cart from './pages/Cart';

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

      {/* <Router>
          <Header />
        <div className='container'>
<Routes>
<Route  path='/' element={<Home/>}></Route>
<Route  path='/cart' element={<Cart/>}></Route>
<Route  path='/login' element={<Login/>}></Route>
<Route  path='/SignUp' element={<SignUp/>}></Route>
<Route  path='/products' element={<Products/>}></Route>    
</Routes>
        </div>
     <Footer/>
      </Router> */}
      </div>
    </>
  )
}

export default App
