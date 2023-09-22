
//import "./Navbar.css";
//import logo from '../../assets/img20pl.svg';
//import { MenuData } from './MenuData';
const Navbar = () => {
  return (
    <header className='container mx-auto px-4 py-6 flex items-center justify-between no-underline'>
<a href='/' className='font-bold text-white no-underline text-xl'>Pluralistic</a>
    <nav className='' >
    {/* <div className='container mx-auto px-4 py-6 flex items-center justify-between'>
        
        <img src={logo} className='align-center mx-6 md:cursor-pointer h-24 w-16 rounded-full  ' alt="logo"></img>
        </div> */}
        
        <ul className='flex items-center justify-center font-semibold'>
       

            <li  className='relative px-3 py-2 group'>
                <button className='hover:opacity-50 curser-default'
                >About-Us</button>
                <div className='absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform bg-white'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                  <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm'></div>
                    <p className='text-black'>about</p>
                  </div>

                </div>
               
            </li>
            <li  className='relative group px-3 py-2'>
                <button className='hover:opacity-50 curser-default'
                >Seller LogIn</button>
                <div className='absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                    <p></p>
                  </div>

                </div>
               
            </li>
            <li  className='relative group px-3 py-2'>
                <button className='hover:opacity-50 curser-default'
                >Products</button>
                <div className='absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
                  <div  className='relative top-6 p-6 bg-white rounded-xl shadow-xl w-full'>
                    <p></p>
                  </div>

                </div>
               
            </li>
        
        </ul>
        
        
        </nav>
        <nav>
          <ul>
            <li>
<a href='#' className='rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group'>
  <span className='mr-2 text-white'>Sign in</span>
  <svg className="stroke-current stroke-2 
  " width="10" height="10" fill="none" viewBox="0 0 10 10" aria-hidden="true">
  <g fillRule="evenodd">
    
      <path  className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
      <path className="opacity-100  group-hover:stroke-white  group-hover:transform group-hover:translate-x-1 ease-in-out duration-200 " d="M1 1l4 4-4 4"></path>
    
  </g>
</svg>
</a>
            </li>
          </ul>
        </nav>
    
    </header>
  )
}

export default Navbar