import React from 'react'

const Cards = () => {
  return (
    <div className="max-w-[1680px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className='relative'>
            <div className='rounded-xl absolute w-full h-full bg-black/50 text-white p-4'>
                <h2 className='font-bold text-2xl'>Fruits & <span className='text-emerald-300'>Vegetables</span></h2>
                <p>Experience the vibrant goodness of nature with our <span className='text-emerald-300'>fresh
                </span>, <span className='text-emerald-300'>hand-picked</span> fruits and vegetables</p>
                <button className='rounded-xl bg-emerald-400/60 text-white p-1 m-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src="https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="card" className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover'/>
        </div>
        <div className='relative'>
            <div className='rounded-xl absolute w-full h-full bg-black/50 text-white p-4'>
                <h2 className='font-bold text-2xl'>Eggs, Meat & <span className='text-emerald-300'>Fish</span></h2>
                <p>From farm-fresh produce to <span className='text-emerald-300'>premium meats</span>, we've got your plate covered with the <span className='text-emerald-300'>finest selection</span></p>
                <button className='rounded-xl bg-emerald-400/60 text-white p-1 m-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src="https://images.pexels.com/photos/161496/eggs-happen-food-ecology-161496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="card" className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover'/>
        </div>
        <div className='relative'>
            <div className='rounded-xl absolute w-full h-full bg-black/50 text-white p-4'>
                <h2 className='font-bold text-2xl'>Beverages & <span className='text-emerald-300'>Snacks</span></h2>
                <p>From energizing beverages to delightful snacks, we've got your <span className='text-emerald-300'>cravings</span> covered</p>
                <button className='rounded-xl bg-emerald-400/60 text-white p-1 m-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src="https://images.pexels.com/photos/952593/pexels-photo-952593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="card" className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover'/>
        </div>
    </div>
  )
}

export default Cards