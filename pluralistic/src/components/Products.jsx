import { useEffect, useState } from "react";
import { fetchApi } from "../fetchApi";
import { Link } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
//import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
// import { ProductCard } from "./ProductCard";
import { Search } from "./search/Search";
import { Results } from "./search/Results";

const Products = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);

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
      <div className="pt-[20vh] w-[40%] m-auto flex flex-col items-center min-w-[200px]">
        <Search setResults={setResults} />
      </div>
      <div className="">
        <Results results={results} />
      </div>
    </section>
  );
};

export default Products;
