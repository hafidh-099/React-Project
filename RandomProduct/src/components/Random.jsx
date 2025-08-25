import React, { useEffect, useState } from "react";

function Random() {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    FetchData();
  }, []);
  function FetchData() {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          let random = Math.floor(Math.random() * data.length);
          let randomData = data[random];
          setProduct(randomData);
        });
        setCount((count=>count + 1));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="product-container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <h3>Price ${product.price}</h3>
      <p>you have seen {count} product</p>
      <button onClick={FetchData}>Generate other image</button>
    </div>
  );
}

export default Random;
