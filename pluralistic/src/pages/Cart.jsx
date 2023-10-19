import { useSelector } from "react-redux"
const Cart = () => {
    const products = useSelector((state)=> state.oneReducer.products)
  return (
    <div className="w-full bg-gray-100 py-4 bg-opacity-20">
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
                </div>
            ))
        }
        </div>
       </div>
        <div className="w-full h-full bg-white col-span-1"></div> 
       </div>
    </div>
  )
}

export default Cart