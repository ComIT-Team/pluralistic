import {Link } from 'react-router-dom'
import Login from "../signup/Login"
const FooterTop = () => {
  return (
    <div className="w-full bg-white py-4 bg-opacity-10" >
        <div className="w-full   border-b-[1px] py-6 my-2">
           <div className="w-64 mx-auto text-center flex flex-col gap-1">
            <p className="text-sm text-black mt-2 p-6">See Personalized Recommendations
            </p>
            <Link to="/login" element={Login}>    
            {/* //////need onclick */}
            <button className="w-full bg-indigo-900 rounded-md py-1 font-semibold cursor-pointe hover:bg-indigo-600 active:bg-indigo-500">Sign In</button></Link>
            <p className="text-sm mt-1 text-black">New Customer?{""}</p>
            <Link to="/SignUp">
            <span className="text-pink-400 ml-1 cursor-pointer">Start here.</span></Link>
           </div>
        </div>
    </div>
  )
}

export default FooterTop