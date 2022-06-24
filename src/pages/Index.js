import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product(props) {
  // create state to hold product data
  const [products, setProduct] = useState(null);

  const URL = "https://project3-be.herokuapp.com/products/"

  

  const [newForm,setNewForm] = useState({
    name:"",
    image:"",
    price:"",
    description:"",
    tag:"",
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
        description:"",
        tag:"",
    });
};

  //create function to make api call
  const getProductData = async () => {
    console.log(props.role)
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
            <img src={product.image} alt="" />
            <span id="price"><h2>${product.price}</h2></span>
          </div>
        )
      }
    )
  )};

  const createForm = () => {
    return (
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          required="required"
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
          required="required"
          onChange={handleChange}
        />
        <input 
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input 
          type="text"
          value={newForm.tag}
          name="tag"
          placeholder="tag"
          onChange={handleChange}
        />
        <input type="submit" value="Create Product" />
      </form>
    )
  }
  
  return (
    <section className='products'>
      {props.role === 'admin' ? createForm() : <></>}
      {products ? loaded() : <h1>Loading...</h1>}
    </section>

  )
  

}
export default Product;
