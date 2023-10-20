import  { useEffect, useState } from "react";
import { fetchApi } from "../fetchApi";
import { Link } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
//import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
// import { ProductCard } from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const { id, title, price, description, category, image, rating } = data;
  // filter functions
  // const [items, setItems] = useState(data)
  const filterType = (cat) => {
    setData(
      data.filter((item) => {
        return item.category === cat;
      })
    );
  };

  const priceType = (amount) => {
    setData(
      data.filter((item) => {
        return item.price === amount;
      })
    );
  };

  return (
    <section className="py-4">
      {/* filter data */}
      <div className="max-w-[1640px] m-auto px-4">
        {/* <h1 className='font-bold text-4xl text-center'>Items</h1> */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="">
            {/* filter by category */}
            <p className="font-bold text-white">Category:</p>
            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => setData()}
                className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => filterType("men's clothing")}
                className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                Men's Clothing
              </button>
              <button
                onClick={() => filterType("women's clothing")}
                className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                Women's Clothing
              </button>
              <button
                onClick={() => filterType("jewelery")}
                className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                Jewellery
              </button>
              <button
                onClick={() => filterType("electronics")}
                className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                Electronics
              </button>
            </div>
          </div>
          <div className="">
            {/* filter by price */}
            <p className="font-bold text-white">By Price:</p>
            <div className="flex justify-between flex-wrap">
              <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Under $25
              </button>
              <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                $25 to $50
              </button>
              <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                $50 to $100
              </button>
              <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                $100 to $200
              </button>
              <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                $200 & above
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Actual data */}
      <div className="container mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {data.map((item) => (
            <div key={item.id} className="m-6">
              <Link to={'/'}>
                <div className="border border-gray-400 h-[300px] mb-4 relative overflow-hidden group transition bg-zinc-50 rounded-xl">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                      <img
                        className="max-h-[160px] group-hover:scale-110 transition duration-300"
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* add icons */}
                  <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button>
                      <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                        <AddRoundedIcon className="text-3xl" />
                      </div>
                    </button>
                  </div>
                </div>
              </Link>
              <div>
                <div className="text-sm capitalize text-gray-100 mb-1">
                  {item.category}
                </div>
                <Link className="no-underline text-red-300 flex">
                  
                  <button onClick={()=>dispatch(addToCart({
                    id:item.id,
                    title:item.title,
                    description:item.description,
                    price:item.price,
                    image:item.image,
                    quantity:1,
                  }))} className="rounded-xl bg-orange-500/60 text-white p-1">
                  <AddShoppingCartRoundedIcon className="p-1 text-red-600" />
                    Add to Cart
                  </button>
                </Link>
                <Link
                  className="no-underline text-zinc-50"
                  to='/'
                >
                  <h2 className="text-base font-semibold mb-1">{item.title}</h2>
                </Link>

                <h1 className="text-base font-semibold text-amber-100">
                  $ {item.price}
                </h1>
              </div>
              {/* <p>{item.category}</p>
              <p>{item.description}</p>
              <h2 className='text-base text-red-700'>$ {item.price}</h2> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
