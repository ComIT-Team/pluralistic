


import Login from "../signup/Login"
import About from "../about/AboutUs"


import Products from '../Products'
import { Link } from 'react-router-dom'
//import Home from "../Home"
//import "./Navbar.css";

//import { MenuData } from './MenuData';
const Navbar = () => {
  return (
    <header className='container mx-auto px-4 py-6 flex items-center justify-between no-underline'>
    
{/* <Link to='/' element={Home}><h1 className='font-bold text-white no-underline text-xl'>Pluralistic</h1></Link> */}
    <nav className="grid grid-cols-3 gap-4  place-items-start "  >
    <div className='container mx-auto px-4 py-0 flex self-start items-start '>
        
        </div>
        <div className="self-start">
        <ul className='  flex items-center justify-center font-semibold mx-auto px-4 py-[3em] whitespace-nowrap '>
       

            <li  className='relative px-3 py-2 group'>
            <Link to="/AboutUs" element={About}>
                <button className='hover:opacity-50 curser-default text-white'
                >About-Us</button>
            
                <div className='absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform bg-white'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                  <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm'></div>
                    <p className='text-black'>about</p>
                  </div>

                </div>
                </Link>
            </li>
            <li  className='relative group px-3 py-2'>
                <button className='hover:opacity-50 curser-default text-white'
                >Seller LogIn</button>
                <div className='absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                    <p></p>
                  </div>

                </div>
               
            </li>
            <li  className='relative group px-3 py-2'>
             <Link to='/products' element={Products}><button className='hover:opacity-50 curser-default text-white'
                >Products</button>  </Link> 
                <div className='absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                    <p></p>
                  </div>

                </div>
               
            </li>
        
        </ul>
        </div>
        
        </nav>
        <nav>
          <ul>
            <li>
<Link to='/login' element={Login} className='rounded-full px-3 py-2 mt-0 font-semibold bg-white bg-opacity-10 flex items-center group text-white'>
  <span className='mr-2 text-white whitespace-nowrap '>Sign in</span>
  <svg className="stroke-current stroke-2 
  " width="10" height="10" fill="none" viewBox="0 0 10 10" aria-hidden="true">
  <g fillRule="evenodd">
    
      <path  className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
      <path className="opacity-100  group-hover:stroke-white  group-hover:transform group-hover:translate-x-1 ease-in-out duration-200 " d="M1 1l4 4-4 4"></path>
    
  </g>
</svg>
</Link>
            </li>
          </ul>
        </nav>
    
    </header>
  )
}

export default Navbar