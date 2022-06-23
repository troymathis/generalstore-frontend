// component libraries
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

// page components
import Index from "../pages/Index";
import Show from "../pages/Show";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Main = () => {
  const [product, setProduct] = useState(null);

  const URL = "https://project3-be.herokuapp.com/products/";

  const getProduct = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProduct(data);
  };

  const updateProduct = async (product, id) => {
    // make put request to create product
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(product),
    });
    // update list of product
    getProduct();
  };

  const deleteProduct = async (id) => {
    // make delete request to create people
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of product
    getProduct();
  };

  useEffect(() => {getProduct()}, []);
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <div>
        <Route exact path="/products">
          <Index />
        </Route>
      </div>
      <Route
        path="/products/:id"
        render={(rp) => (
          <Show
            product={product}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
            {...rp}
          />
        )}
      />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </main>
  );
};

export default Main;
