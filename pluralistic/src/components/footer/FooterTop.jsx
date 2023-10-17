

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6" >
        <div className="w-full border-b-[1px] py-8">
           <div className="w-64 mx-auto text-center flex flex-col gap-1">
            <p className="text-sm text-black">See Personalized Recommendations
            </p>
            <button className="w-full bg-indigo-900 rounded-md py-1 font-semibold cursor-pointe hover:bg-indigo-600 active:bg-indigo-500">Sign In</button>
            <p className="text-sm mt-1 text-black">New Customer?{""}</p>
            <span className="text-blue-600 ml-1 cursor-pointer">Start here.</span>
           </div>
        </div>
    </div>
  )
}

export default FooterTop