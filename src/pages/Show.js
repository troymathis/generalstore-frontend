
import { useEffect } from "react";
import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const product = props.product;
  const products = product?.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(products);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.updateProduct(editForm);
    props.history.push("/");
  }

  const removeProduct = () => {
    props.deleteProduct(product._id);
    props.history.push("/");
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
      <h2>{products?.price}</h2>
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
        <input type="submit" value="Update Product" />
      </form>
    </div>
  )
}

export default Show;