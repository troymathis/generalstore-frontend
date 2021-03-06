
import { useEffect } from "react";
import { useState } from "react";
function Show(props) {
  const [products, setProduct] = useState(null);
  
  const id = props.match.params.id;
  const cart = props.cart || []

  const refreshData = async () => {
    const URL = "https://project3-be.herokuapp.com/products/"
    // make api call and get response
    const response = await fetch(URL);
    // turn response into javascript object
    const data = await response.json();
    // set the state to the data
    return(data)
  };

  const getProduct = async () => {
    let data = await refreshData();
    setProduct(data.find(p => p._id === id))
  }

  useEffect(() => {getProduct()}, []);
  const [ editForm, setEditForm ] = useState(products);

  const addToCart = () => {
    cart.push(id)
    console.log(cart)
  }

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    console.log(editForm);
    event.preventDefault();
    props.updateProduct(editForm,products._id);
    props.history.push("/products");
  }

  const removeProduct = () => {
    props.deleteProduct(products._id);
    props.history.push("/products");
  }

  const createForm = () => {
    return (
      <>
        <button id="delete" onClick={removeProduct}>
          DELETE
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm?.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm?.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm?.price}
            name="price"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm?.description}
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
          <input 
            type="text"
            value={editForm?.tag}
            name="tag"
            placeholder="tag"
            onChange={handleChange}
          />
          <input type="submit" value="Update Product" />
        </form>
      </>
    )
  }

 useEffect(() => {
    if (products){
        setEditForm(products)
    }
 },[products])
 
  return (
    <div className="product">
      <h1>{products?.name}</h1>
      <img src={products?.image} alt={products?.name} />
      <h2> ${products?.price} </h2>
      <div onClick={addToCart}>ADD TO CART</div>
      {props.role === 'admin' ? createForm() : <></>}
    </div>
  )
}

export default Show;