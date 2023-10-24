import React from "react";
import { Link } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export const Results = ({ results }) => {
  const dispatch = useDispatch();

  return (
    <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
      {results.map((item, id) => {
        return (
          <div key={item.id} className="m-6">
            <Link to={"/"}>
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
              <div className="text-sm capitalize text-black mb-1">
                {item.category}
              </div>
              <Link className="no-underline text-red-300 flex">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        price: item.price,
                        image: item.image,
                        quantity: 1,
                      })
                    )
                  }
                  className="rounded-xl bg-orange-500/60 text-white p-1"
                >
                  <AddShoppingCartRoundedIcon className="p-1 text-red-600" />
                  Add to Cart
                </button>
              </Link>
              <Link className="no-underline text-black" to="/">
                <h2 className="text-base font-semibold mb-1">{item.title}</h2>
              </Link>

              <h1 className="text-base font-semibold text-red-600">
                $ {item.price}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
