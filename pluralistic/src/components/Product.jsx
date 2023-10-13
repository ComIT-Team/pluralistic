import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the id
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);
  // console.log(product)
  return (
    <div>
      <h2>Product Details</h2>
      {/* <p>{product.id}</p>
      <p>{product.title}</p>
      <img
        className="max-h-[160px] group-hover:scale-110 transition duration-300"
        src={product.image}
        alt=""
      />
      <p>{product.category}</p>
      <p>{product.price}</p> */}
    </div>
  );
}

export default Product;
// {product ? (
//     <div>
//       <p>Product ID: {product.id}</p>
//       <p>Name: {product.name}</p>
//       {/* Add other product details here */}
//     </div>
//   ) : (
//     <p>Loading...</p>
//   )}
