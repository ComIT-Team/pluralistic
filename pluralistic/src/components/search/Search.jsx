import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  async function fetchData(value) {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const results = data.filter((item) => {
        return item && item.title.toLowerCase().includes(value);
      });
      setResults(results);
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="bg-white w-[100%] rounded-xl h-14 py-4 shadow flex items-center">
      <SearchRoundedIcon className="text-blue-800" />
      <input
        type="search"
        placeholder="Start shopping..."
        className="bg-transparent border-none h-[100%] text-xl w-[100%] ml-1 outline-none text-black"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
