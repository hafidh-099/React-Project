import React from "react";
import ProductDetail from "./ProductDetail";

function ProductCard() {
  const product = [
    {
      productName: "Cream cake",
      productImage: "./assets/cake1.png",
      productPrice: "12.54$",
      productDescription: "this is cream cake from amanda store",
      stock:true
    },
    {
      productName: "apple",
      productImage: "./assets/apple.png",
      productPrice: "5.99$",
      productDescription: "this is pure and sweat apple",
      stock:false
    },
    {
      productName: "chocolate",
      productImage: "./assets/chocolate1.png",
      productPrice: "50$",
      productDescription: "this is black chocolate",
      stock:true
    },
    {
      productName: "Ice Cream",
      productImage: "./assets/icercream.png",
      productPrice: "50$",
      productDescription: "milk + chocolate",
      stock:false
    },
  ];
  return (
    <main>
      <section className="products">
        <ProductDetail moreP={product} />
      </section>
    </main>
  );
}

export default ProductCard;
