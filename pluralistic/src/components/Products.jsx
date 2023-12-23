// import { useEffect, useState } from "react";
// import { fetchApi } from "../fetchApi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
// //import { Link } from "react-router-dom";
// import AddRoundedIcon from "@mui/icons-material/AddRounded";
// //import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
// import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
//import { useDispatch } from "react-redux";
///import { addToCart } from "../redux/cartSlice";
// import { ProductCard } from "./ProductCard";
// import { Search } from "./search/Search";
// import { Results } from "./search/Results";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  //const dispatch = useDispatch();
  const data = useLoaderData()
  const productData = data.data
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4 py-6">{productData.map((item) => (
      <div key ={item.index} className="bg-white h-auto w-full border-[1px] border-gray-300 py-6  hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative rounded-lg group overflow-hidden">
<div className="w-full h-auto flex items-center justify-center relative">
  <img className="w-52 h-64 object-contain scale-90 hover:scale-100 transition-transform duration-300" src={item.image}  alt ="productImage"/>
  <span className='text-xm capitalize italic absolute top-0 right-2 text-gray-600'>{item.category}</span>
  <div className='text-black  w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
  <span className=" w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-indigo-300 cursor-pointer duration-300">
  <ShoppingCartIcon />
</span>
<span className=" w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-indigo-300 cursor-pointer duration-300 ">
  <FavoriteTwoToneIcon/>
</span>
  </div>
</div>

<hr/>
<div className="text-black px-4 py-3 flex flex-col gap-1">
  <h2 className=" font-medium ">{item.title.substring(0,20)}</h2>
  <p className="font-semibold ">${item.price}</p>
</div>
<div>
  <p className=" text-xs text-gray-600 text-justify px-2">{item.description.substring(0,100)}...</p>
  <button className="h-10  w-[18rem] xl:w-[20rem] m-4 sml:w-[22rem] md:w-[18rem]  lgl:w-[28rem] font-medium bg-indigo-600 text-white items-center rounded-md hover:bg-purple-700 duration-300">add to cart</button>
</div>
{/* xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px", */}
      </div>
    ))}
    </div>
  )

  // const [data, setData] = useState([]);
  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   fetchApi()
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log("Error:", err);
  //     });
  // }, []);

  // const { id, title, price, description, category, image, rating } = data;
  // // filter functions
  // // const [items, setItems] = useState(data)
  // const filterType = (cat) => {
  //   setData(
  //     data.filter((item) => {
  //       return item.category === cat;
  //     })
  //   );
  // };

  // const priceType = (amount) => {
  //   setData(
  //     data.filter((item) => {
  //       return item.price === amount;
  //     })
  //   );
  // };

  // return (
  //   <section className="py-4">
  //     {/* filter data */}
  //     <div className="max-w-[1640px] m-auto px-4">
  //       {/* <h1 className='font-bold text-4xl text-center'>Items</h1> */}
  //       <div className="flex flex-col lg:flex-row justify-between">
  //         <div className="">
  //           {/* filter by category */}
  //           <p className="font-bold text-white">Category:</p>
  //           <div className="flex justify-between flex-wrap">
  //             <button
  //               onClick={() => setData()}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               All
  //             </button>
  //             <button
  //               onClick={() => filterType("men's clothing")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Men's Clothing
  //             </button>
  //             <button
  //               onClick={() => filterType("women's clothing")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Women's Clothing
  //             </button>
  //             <button
  //               onClick={() => filterType("jewelery")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Jewellery
  //             </button>
  //             <button
  //               onClick={() => filterType("electronics")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Electronics
  //             </button>
  //           </div>
  //         </div>
  //         <div className="">
  //           {/* filter by price */}
  //           <p className="font-bold text-white">By Price:</p>
  //           <div className="flex justify-between flex-wrap">
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               Under $25
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $25 to $50
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $50 to $100
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $100 to $200
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $200 & above
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Actual data */}
  //     <div className="pt-[20vh] w-[40%] m-auto flex flex-col items-center min-w-[200px]">
  //       <Search setResults={setResults} />
  //     </div>
  //     <div className="">
  //       <Results results={results} />
  //     </div>
  //   </section>
  // );
};

export default Products;
