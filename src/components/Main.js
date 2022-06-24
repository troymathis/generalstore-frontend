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
import Cart from "../pages/Cart";
import Account from "../pages/Account";

const Main = (props) => {
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(null);

  const URL = "https://project3-be.herokuapp.com/products/";
  const CARTS_URL = "https://project3-be.herokuapp.com/carts/";

  const getUserCart = async (uid) => {
    const response = await fetch(CARTS_URL + uid);
    const data = await response.json();
    data ? setCart(data) : createNewCart(uid)
  };

  const createNewCart = async (uid) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: {"UID": `${uid}`,"products": []}
    });
  };

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
  useEffect(() => {getUserCart()}, []);

  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <div>
        <Route exact path="/products">
          <Index user={props.user} role={props.role} cart={cart}/>
        </Route>
      </div>
      <Route
        path="/products/:id"
        render={(rp) => (
          <Show
            role={props.role}
            product={product}
            cart={cart}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
            {...rp}
          />
        )}
      />
      <Route path="/about">
        <About />
      </Route>
      <Route
        path="/login"
        render={(rp) => (
          <Login {...rp}/>
        )}
      />
      <Route 
        path="/register"
        render={(rp) => (
          <Register {...rp}/>
        )}
      />
      <Route path="/cart">
        <Cart />
      </Route>
      <Route>
        <Account/>
      </Route>
    </main>
  );
};

export default Main;
