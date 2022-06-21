import { useState, useEffect } from "react";
 import { Link } from "react-router-dom"

function Product(props) {
  // create state to hold product data

  // const URL = "http://localhost:4000/products";

  const [products, setProduct] = useState(null);
  const URL = "https://generalstore-be.herokuapp.com/products"
  

  const [newForm,setNewForm] = useState({
    name:"",
    image:"",
    price:"",
});

const handleChange= (event) => {
    setNewForm({...newForm,[event.target.name]:event.target.value});
};

//handle submit function for form
const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(newForm);
    setNewForm({
        name:"",
        image:"",
        price:"",
    });
};

  //create function to make api call
  const getProductData = async () => {
    // make api call and get response
    const response = await fetch(URL);
    // turn response into javascript object
    const data = await response.json();
    // set the state to the data
    setProduct(data);
  };
  const createProduct = async product => {
    // make post request to create people
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(product),
    });
    // update list of people
    getProductData();
  }

  // make initial call for the data inside a useEffect, so it only happens once one component load
  useEffect(() => {getProductData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
        products.map((product, index) => {
        return (
          <div key={index} className='prdct'>
            <Link to={`/products/${product._id}`}>
            <h1>{product.name}</h1>
          </Link>
            <span id="name"><h2>{product.name}</h2></span>
            <img src={product.image} alt="" />
            <span id="price"><h2>Price: {product.price}</h2></span>
          </div>
        )
      }
    )
  )};
  return (
    <section>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={newForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  />
             <input
                  type="text"
                  value={newForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
                  />
            <input 
                  type="text"
                  value={newForm.price}
                  name="price"
                  placeholder="price"
                  onChange={handleChange}
                  />
            <input type="submit" value="Create Product" />
          </form>
          {products ? loaded() : <h1>Loading...</h1>}
      </section>

  )
  

}
export default Product;
