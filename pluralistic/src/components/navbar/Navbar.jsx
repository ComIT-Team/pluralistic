//import Login from "../signup/Login"
import About from "../about/AboutUs"
//import {motion} from "framer-motion"
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Products from '../Products'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"
import SideNav from "./SideNav";
//import Home from "../Home"
const Navbar = () => {
  const [sideBar, setSideBar]= useState(false);
  const ref =useRef();
  useEffect(()=>{
    document.body.addEventListener("click", (e)=>{
if(e.target.contains(ref.current)){
  setSideBar(false)
}

    },[ref,sideBar])
  })
  return (
    <div className="w-full px-4  h-[36px]  mt-1 bg-indigo-900 text-white flex items-center ">
{/* <Link to='/' element={Home}><h1 className='font-bold text-white no-underline text-xl'>Pluralistic</h1></Link> */}
   
        
        <ul className=' flex items-center text-sm tracking-wide gap-2 pt-3'>
       
            <li onClick={()=>setSideBar(true)} className='z-1 headerHover flex items-center gap-1 '> <MenuOpenOutlinedIcon/>All</li>
            <li  className='headerHover '>
            <Link to="/AboutUs" element={About}>
                <button className='hover:opacity-50 curser-default text-white'
                >About-Us</button>
            
                {/* <div className='absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform bg-white'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                  <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm'></div>  </div> */}
                    {/* <p className='text-black'>about</p> */}
                 

                
                </Link>
            </li>
            <li  className=' headerHover '>
                <button className='hover:opacity-50 curser-default text-white '
                >Seller LogIn</button>
                {/* <div className='absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                    <p></p>
                  </div>

                </div> */}
               
            </li>
            <li  className='headerHover'>
             <Link to='/products' element={Products}><button className=' hover:opacity-50 curser-pointer text-white  '
                >Products</button>  </Link> 
                {/* <div className='absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                    <p></p>
                  </div>

                </div> */}
               
            </li>
        
        </ul>
        {/* =======SideNav ====== */}
        {
            sideBar && (
          <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
            <div className="w-[320px] h-full relative ">
              {/* <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className="w[310px] h-full bg-white border border-black"> */}
              <div ref={ref} className="w[310px] h-full bg-white border border-black">    
                <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4"> <AccountCircleRoundedIcon/>
                <h3 className=' font-titleFont font-bold text-lg tracking-wide' > Hello, Sign In</h3></div>
                <SideNav
                  title="Shop By Department"
                  one="Electronics"
                  two="Computers"
                />
                <SideNav
                   title="Programs & Features"
                  one="Gift Cards"
                  two="International Shopping"
                />
                <SideNav
                   title="Help & Settings"
                  one="Your Account"
                  two="Customer Service"
                />
              <span onClick={() => setSideBar(false)} className="cursor-pointer absolute top-0 left-[330px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-700 hover:text-white duration-300">

              <CloseOutlinedIcon/>
              </span>
              </div>
              {/* </motion.div> */}
            </div>
          </div>
          )
          }
        </div>
        
    
      
        
        )
        
}

export default Navbar


  {/* <nav>
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
          
        </nav> */}