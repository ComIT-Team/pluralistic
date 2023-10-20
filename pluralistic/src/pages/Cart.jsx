import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion";
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { useEffect, useState } from "react";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/cartSlice";
import { emptyCart } from "../components/Images";
import { Link } from "react-router-dom";
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.cart.products)
    const [totalPrice, setTotalPrice] =useState("")
    useEffect(()=>{
        let Total=0;
        products.map((item)=>{
            Total += item.price * item.quantity
            return setTotalPrice(Total.toFixed(2))
        })
    }),[products]
  return (
    <div className="w-full bg-gray-100 py-4 ">
      {
        products.length > 0 ?(
            <div className="container mx-auto h-auto grid grid-cols-5 gap-8 bg-opacity-20">
       <div className="w-full h-full bg-white px-4 col-span-4 ">
        <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3 text-black">
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h3 className="text-xl font-normal">Subtitle</h3>
        </div>
        {/* ======Products Display====== */}
        <div>
        {
            products.map((item)=>(
                // eslint-disable-next-line react/jsx-key
                <div key={item.id} className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6">
                <div className="w-1/5">
                    <img className="w-full h-44 object-contain" src= {item.image} alt="img"/>
                </div>
                <div className="text-black w-4/5">
                    <h2 className="font-semibold text-lg ">{item.title}</h2>
                    <p className="pr-10 text-sm">{item.description.substring(0,200)}</p>
                    <p className="text-base">Unit Price <span className="font-semibold">${item.price}</span></p>
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md" >
                        <p>Qty:</p>
                        <p onClick={()=>dispatch(decrementQuantity(item.id))} className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">-</p>
                        <p>{item.quantity}</p>
                        <p onClick={()=>dispatch(incrementQuantity(item.id))} className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">+</p>
                    </div>
                    <button onClick={()=> dispatch(deleteItem(item.id))} className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">Delete Item</button>
                </div>
                <div className="pl-24">
                    <p className="text-lg font-titleFont font-semibold text-black">${item.price * item.quantity}</p>
                </div>
                </div>
            ))
        }
        </div>
        <div>
        <button onClick={()=> dispatch(resetCart())}
        className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide my-1">
        Clear Cart
        </button>
        </div>
       </div>
        <div className="w-full h-52 bg-white col-span-1 text-black flex flex-col items-center justify-center p-4">
        <div>
            <p className="flex gap-2 items-start text-sm">
            <span><AssignmentTurnedInOutlinedIcon className="bg-white text-green-500 rounded-ull"/></span>{""} Your order qualifies for Free Shipping Choose this option at checkout. See details...</p>
        </div> 
        <div>
            <p className="font-semibold px-10 py-1 flex items-center justify-between gap-2">Total: <span className="text-lg font-bold">${totalPrice}</span></p>
        </div>
        <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3 text-black">Proceed to Pay</button>
       </div>
    </div>
        ):<motion.div 
        initial={{y:70, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay:0.5, duration:0.5}}
         className="flex justify-center items-center gap-4 py-10">
        <div>
            <img className="w-80 rounded-lg p-4 mx-auto" src={emptyCart} alt="emptyCartImg"/>
        </div>
        <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg text-black">
        <h1 className="font-titleFont text-xl font-bold">Your Cart feels lonely.</h1>
        <p className="text-sm text-center">{""}
        Your Shopping cart lives to serve. give it purpose - fill it with books, electronics, videos, etc. and make it happy.</p>
       <Link to="/">
       <button className="w-full font-titleFont font-semibold text-lg bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 px-2 rounded-md mt-3 text-black">Continue Shopping</button>
       </Link>
        </div>
        </motion.div>
      }
    </div>
  )
}

export default Cart