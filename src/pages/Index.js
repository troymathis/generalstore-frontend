import { useState, useEffect } from "react";

function Product(props) {
  // create state to hold product data

  const [products, setProduct] = useState(null);

  //create function to make api call
  const getProductData = async () => {
    // make api call and get response
    const response = await fetch("https://generalstore-be.herokuapp.com/products");
    // turn response into javascript object
    const data = await response.json();
    // set the state to the data
    setProduct(data);
  };
  // make initial call for the data inside a useEffect, so it only happens once one component load
  useEffect(() => {getProductData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return products.map((product, index) => {
      return (
        <div key={index} className='prdct'>
          <span id="name"><h2>{product.name}</h2></span>
          <img src={product.image} alt="" />
          <span id="price"><h2>Price: {product.price}</h2></span>
        </div>
      );
    });
  };
  return products ? loaded() : <h1>Loading...</h1>;
}
export default Product;
