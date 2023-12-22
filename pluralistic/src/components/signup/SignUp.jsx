import axios from 'axios'
import {motion} from 'framer-motion'
import {ColorRing }from 'react-loader-spinner'
//import {CircularProgress} from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import Login from "./Login"
import SellerLogin from "./SellerLogin"
import { useState, } from "react"
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  
  //  Error Messages start====>
  const [errClientName, setErrClientName] = useState("")
  const [errEmail, setErrEmail] = useState("")
  const [errPassword, setErrPassword] = useState("")
  const [errLName, setErrLName] = useState("")
  const [err, setErr] =useState("")
  const [loading, setLoading]= useState(false)
  const [successMsg, setSuccessMsg]=useState("")
  const navigate = useNavigate()
  // Handle Inputs function ====>
  const handleName = (e) => {
    setFirstName(e.target.value)
    setErrClientName("")
  }
  const handleLname = (e) => {
    setLastName(e.target.value)
    setErrLName("")
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword("")
  }
  //====>Email validation check===>
  const emailValidation = (email) => {
    // eslint-disable-next-line no-useless-escape
    return String(email).toLowerCase().match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);
  }

  //===Submit button for signup==>
  const handleRegistration = () => {
    
    if (!firstName) {
      setErrClientName("Enter your Name")
    }
    if (!lastName) {
      setErrLName("Enter your last Name")
    }
    if (!email) {
      setErrEmail("Enter your email")
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email")
        setErr("")
      }
    }
    if (!password) {
      setErrPassword("Password required")
    } else {
      if (password.length < 8) {
        setErrPassword("Password must be at least 6 characters")
      }
    }
    if (firstName && email && emailValidation(email) && password && password.length >= 8 && lastName) {
      setFirstName("")
      setEmail("")
      setPassword("")
      setLastName("")
    }
  }
 // Handle signup >>>>
 const onSubmit = async(e) =>{
  e.preventDefault();
  handleRegistration();
try{
setLoading(true)
  await axios.post("https://3.145.11.221:8443/api/v1/auth/signup",{
    username:firstName,
  firstName:firstName ,
  email: email,
  lastName:lastName,
  password: password
} );
//alert("Welcome to Pluralistic");
setLoading(false)
setSuccessMsg("Account Created Successfully !")
setTimeout(()=>{
  navigate("/login")
},3000)
 } catch(err){
  const errMessage = err.message;
  
  if(errMessage.includes("Request failed with status code 403")){
setErr("Email Already in use, please try another one")
   // alert("Email Already in use, please try another one")
  }
 }
}
   


  return (
    <>
      <section className="h-screen -mt-35 p-3">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image" />
            </div>

            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form >
                {/* <!--Sign in section--> */}
                <div
                  className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg">Sign in with</p>

                  {/* <!-- Facebook --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block mx-1 h-9 w-9 rounded-full bg-indigo-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    {/* <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>

                  {/* <!-- Twitter --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block mx-1 h-9 w-9 rounded-full bg-indigo-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    {/* <!-- Twitter --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  {/* <!-- Linkedin --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block mx-1 h-9 w-9 rounded-full bg-indigo-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    {/* <!-- Linkedin --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div
                  className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p
                    className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-6" >
                    <input onChange={handleName}
                      value={firstName}
                      type="text"
                      className=" peer block min-h-[auto] w-full border-0 rounded px-3 py-[0.32rem] leading-[2.15] mb-3 outline-double outline-white text-white  focus:outline-none focus:ring-1 focus:ring-black focus:border-black placeholder-transparent bg-transparent "
                      id="exampleInput123"
                      required
                      placeholder="First name" />
                    <label
                      htmlFor="emailHelp123"
                      className="absolute left-3 -top-3.5 text-white transition-all ease-out peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                    >First Name
                    </label>
                    {errClientName && (

                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        <span className="italic font-titleFont font-extrabold text-base">!</span>{errClientName}</p>
                    )
                    }
                  </div>
                  <div className="relative mb-6" >
                    <input value={lastName} onChange={handleLname}
                      type="text"
                      className="peer block min-h-[auto] w-full border-0 rounded px-3 py-[0.32rem] leading-[2.15] mb-3 outline-double outline-white text-white  focus:outline-none focus:ring-1 focus:ring-black focus:border-black placeholder-transparent bg-transparent"
                      id="exampleInput124"
                      required
                      placeholder="Last name" />
                    <label
                      htmlFor="exampleInput124"
                      className="absolute left-3 -top-3.5 text-white transition-all ease-out peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                    >Last name
                    </label>
                    {errLName && (

                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        <span className="italic font-titleFont font-extrabold text-base">!</span>{errLName}</p>
                    )
                    }
                  </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input required onChange={handleEmail}
                    type="text" value={email}
                    className="peer lowercase block min-h-[auto] w-full border-0 rounded px-3 py-[0.32rem] leading-[2.15] mb-3 outline-double outline-white text-white  focus:outline-none focus:ring-1 focus:ring-black focus:border-black placeholder-transparent bg-transparent"
                    id="exampleFormControlInput2"
                    placeholder="Email address" />
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="absolute left-3 -top-3.5 text-white transition-all ease-out peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                  >Email address
                  </label>
                  {errEmail && (

                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">!</span>{errEmail}</p>
                  )
                  }
                  {err && (

<p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
  <span className="italic font-titleFont font-extrabold text-base">!</span>{err}</p>
)
}
                </div>

                {/* <!-- Password input --> */}
                <div className="relative mb-6" >
                  <input onChange={handlePassword} required
                    type="password" value={password}
                    className="peer block min-h-[auto] w-full border-0 rounded px-3 py-[0.32rem] leading-[2.15] mb-3 outline-double outline-white text-white  focus:outline-none focus:ring-1 focus:ring-black focus:border-black placeholder-transparent bg-transparent"
                    id="exampleFormControlInput22"
                    placeholder="Password" />
                  <label
                    htmlFor="exampleFormControlInput22"
                    className="absolute left-3 -top-3.5 text-white transition-all ease-out peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                  >Password
                  </label>
                  {errPassword && (

                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">!</span>{errPassword}</p>
                  )
                  }
                  <p className="text-xs">Passwords  must be at least 8 characters contains a number or special symbol</p>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  {/* <!-- Remember me checkbox --> */}
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck2" />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck2">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  {/* <!--Forgot password link--> */}
                  <Link to="#!">Forgot password?</Link>
                </div>

                {/* <!-- SignUp button --> */}
                <div className="text-center lg:text-left">
                  <button
                    onClick={(e)=>onSubmit(e)}
                    type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Sign up
                  </button>
                  { loading && (
                    <div className='flex justify-center'>
                    <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>

                    </div>
                  )}
                  {
                   successMsg && (
                    <div>
                      <motion.p
                      initial={{y:10, opacity:0}}
                      animate={{y:0, opacity:1}}
                      transition={{duration:0.5}}
                      className="text-base font-semibold text-purple-950 border-[1px]border-cyan-600 px-2 text-center">{successMsg}
                      </motion.p>
                      
                    </div>

                   ) 
                  }

                  {/* <!-- Register link --> */}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Already have an account?
                    <Link
                      to="/login" element={Login}
                      className="text-red-500 transition duration-150 ease-in-out hover:text-red-600  focus:text-red-700 active:text-red-900 justify-between text-lg underline underline-offset-4"
                    >  Login</Link
                    >
                  </p>
                  <p className="text-xs mt-5">Buying for Wholesale?
                    <Link to="seller" element={SellerLogin}>
                      <span className="text-sm font-semibold text-pink-950 hover:text-indigo-950 hover:underline underline-offset-1 cursor-pointer duration-100">  Create a free Business Account</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default SignUp