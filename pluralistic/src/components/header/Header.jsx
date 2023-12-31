import logo from '../../assets/logo-transparent-svg.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { allItems } from '../../constants/Categories';
import Navbar from '../navbar/Navbar';
import Home from '../../components/Home'
import { useSelector } from 'react-redux';
import Login from '../signup/Login';
import { userSignOut } from '../../redux/cartSlice';
 import { useDispatch } from 'react-redux';

function Header() {
   const [showAll, setShowAll] = useState(false) 
   const products = useSelector((state)=> state.cart.products);
   const userInfo = useSelector((state) => state.cart.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout=() =>{
       dispatch(userSignOut())
console.log("user signed out")
       navigate("/")
    }
  return (
    <div className='w-full sticky top-0 z-50 '>
    <div className='w-full bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 text-white px-4 py-3 flex items-center gap-4'>
    {/*=========== Image start here=========== */}
    <div className="headerHover ">
   <Link to= '/' element={Home}>
    <img src={logo} className='w-40 mt-2 ' alt="logo"></img></Link>
    </div>
    {/* ===========Image end here ===========*/}
    {/* ===========Deliver Start here=========== */}
    <div  className="headerHover hidden mdl:inline-flex ">
        <LocationOnIcon/>
        <p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Calgary</span></p>
        </div>
    {/* ===========Deliver end here ===========*/}
    {/* ===========Search start here=========== */}
    <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
        <span onClick={()=> setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg0gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-l'>All<span></span>
        <ArrowDropDownOutlinedIcon/>
        </span>
        {
            showAll && (
                <div>
                    <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                        {
                            allItems.map((item)=>(<li key={item.id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>
                                {item.title}
                            </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        <input className='h-full text-base rounded-sm placeholder:text-sm text-amazon_blue border-[3px] flex-grow outline-none border-non px-2' type="text"
            placeholder="Search your wishlist here"
        />
        <span className='w-12 h-full text-2xl  z-[2] flex items-center justify-center absolute right-0 bg-indigo-300 text-blue-600 font-medium shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg cursor-pointer rounded-r px-6 py-2.5'><SearchIcon/></span>
    </div>

    {/* ===========Search End here ===========*/}
    {/*=========== Header Signin start here ===========*/}
        <div className='flex flex-col items-start justify-center headerHover'>
           <Link to="/login" element={Login}> 
           {
            userInfo ?( <p className='text-sm mdl:text-xs mdl:text-lightText font-light'>{userInfo.userName}</p>)  // displaying userNmae is pendeing
            :(
                <p className='text-sm mdl:text-xs mdl:text-lightText font-light'>Hello, Sign In</p>
            )
           }
           
            <p  className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>
            Accounts & list{""}
            <span>
                <ArrowDropDownOutlinedIcon/>
            </span>
            </p></Link>
        </div>
    {/* ===========Signin end here ===========*/}
     {/* ===========Orders start here ===========*/}
        <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
        <p className='text-xs text-lightText font-light'>Returns</p>
        <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>
    {/*  ===========Orders End here=========== */}
    {/* Country choice---- */}
    <div className=" px-4 py-6">
                  <a href="#" className=" flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium text-whiteText">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
    {/* ===========Cart start here ===========*/}
        <Link to="/cart">
        <div className='flex items-start justify-center headerHover relative'>
            <ShoppingCartOutlinedIcon/>
            <p className='text-xs font-semibold mt-3 text-whiteText'>
            <span className='absolute text-xs -top-2.5 left-6 font-bold p-1 h-4 bg-white bg-opacity-45 text-black rounded-full flex justify-center items-center z-50'>
                {products.length > 0 ? products.length: 0}
            </span></p>
        </div></Link>
    {/* ===========Cart End here=========== */}
    {/* ===========Logout button=========== */}
           {userInfo && (
            <div  onClick ={handleLogout}className='flex flex-col justify-center items-center headerHover relative' >
                <LogoutIcon />
                <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>Logout</p>
            </div>
           )}


    </div>
    <Navbar/>
    </div>
  )
}

export default Header