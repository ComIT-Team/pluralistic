import logo from '../../assets/logo-transparent-svg.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div>
    <div className='w-full bg-amazon_blue bg-opacity-10 text-white px-4 py-3 flex items-center gap-4'>
    {/*=========== Image start here=========== */}
    <div className="headerHover ">
    <img src={logo} className='w-40 mt-2 ' alt="logo"></img>
    </div>
    {/* ===========Image end here ===========*/}
    {/* ===========Deliver end here=========== */}
    <div  className="headerHover ">
        <LocationOnIcon/>
        <p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Calgary</span></p>
        </div>
    {/* ===========Deliver end here ===========*/}
    {/* ===========Search start here=========== */}
    <div className='h-10 rounded-md flex flex-grow relative'>
        <span className='w-14 h-full bg-gray-200 hover:bg0gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-l'>All<span></span>
        <ArrowDropDownOutlinedIcon/>
        </span>
        <input className='h-full text-base text-amazon_blue flex-grow outline-none border-non px-2' type="text"/>
        <span className='w-12 h-full  relative z-[2] flex items-center justify-center bg-primary text-white font-medium shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg cursor-pointer rounded-r px-6 py-2.5'><SearchIcon/></span>
    </div>

    {/* ===========Search End here ===========*/}
    {/*=========== Signin start here ===========*/}

    {/* ===========Signin end here ===========*/}
     {/* ===========Orders start here ===========*/}
    {/*  ===========Orders End here=========== */}

    {/* ===========Cart start here ===========*/}
    {/* ===========Cart End here=========== */}



    </div>
    </div>
  )
}

export default Header