// component libraries
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

// page components
import Index from "../pages/Index";
import Show from "../pages/Show";
import About from "../pages/About";
import Home from "../pages/Home";

const Main = () => {
  const [product, setProduct] = useState(null);

  const URL = "http://localhost:4000/products/";

  const getProduct = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProduct(data);
  };

  const createProduct = async (products) => {
    // make post request to create people
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(product),
    });
    // update list of people
    getProduct();
  };

  const updateProduct = async (product, id) => {
    // make put request to create people
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(product),
    });
    // update list of people
    getProduct();
  };

  const deleteProduct = async (id) => {
    // make delete request to create people
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of people
    getProduct();
  };

  useEffect(() => {getProduct()}, []);
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <div className="products">
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
    </main>
  );
};

export default Main;
