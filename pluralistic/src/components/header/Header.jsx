import logo from '../../assets/logo-transparent-svg.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { allItems } from '../../constants/Categories';
import Navbar from '../navbar/Navbar';
function Header() {
   const [showAll, setShowAll] = useState(false) 
    
  return (
    <div className='w-full bg-amazon_blue bg-opacity-25 '>
    <div className='max-w-container text-white px-4 py-3 flex items-center gap-4'>
    {/*=========== Image start here=========== */}
    <div className="headerHover ">
    <img src={logo} className='w-40 mt-2 ' alt="logo"></img>
    </div>
    {/* ===========Image end here ===========*/}
    {/* ===========Deliver Start here=========== */}
    <div  className="headerHover ">
        <LocationOnIcon/>
        <p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Calgary</span></p>
        </div>
    {/* ===========Deliver end here ===========*/}
    {/* ===========Search start here=========== */}
    <div className='h-10 rounded-md flex flex-grow relative'>
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
        <input className='h-full text-base text-amazon_blue flex-grow outline-none border-non px-2' type="text"/>
        <span className='w-12 h-full  relative z-[2] flex items-center justify-center bg-primary text-white font-medium shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg cursor-pointer rounded-r px-6 py-2.5'><SearchIcon/></span>
    </div>

    {/* ===========Search End here ===========*/}
    {/*=========== Signin start here ===========*/}
        <div className='flex flex-col items-start justify-center headerHover'>
            <p className=' text-xs text-lightText font-light'>Hello, Sign In</p>
            <p  className='text-sm font-semibold -mt-1 text-whiteText'>
            Accounts & list{""}
            <span>
                <ArrowDropDownOutlinedIcon/>
            </span>
            </p>
        </div>
    {/* ===========Signin end here ===========*/}
     {/* ===========Orders start here ===========*/}
        <div className='flex flex-col items-start justify-center headerHover'>
        <p className='text-xs text-lightText font-light'>Returns</p>
        <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>
    {/*  ===========Orders End here=========== */}
    {/* ===========Cart start here ===========*/}
        <div className='flex items-start justify-center headerHover relative'>
            <ShoppingCartOutlinedIcon/>
            <p className='text-xs font-semibold mt-3 text-whiteText'>Cart 
            <span className='absolute text-xs -top-2 left-6 font-semibold p-1 h-4 bg-primary text-amazon_blue rounded-full flex justify-center items-center'>0</span></p>
        </div>
    {/* ===========Cart End here=========== */}



    </div>
    <Navbar/>
    </div>
  )
}

export default Header