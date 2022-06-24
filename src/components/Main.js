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
  const [user, setUser] = useState(null);

  const productsUrl = "https://project3-be.herokuapp.com/products/";
  const usersUrl = "https://project3-be.herokuapp.com/users/";

  const getProduct = async () => {
    const response = await fetch(productsUrl);
    const data = await response.json();
    setProduct(data);
  };

  const getUser = async () => {
    const response = await fetch(usersUrl);
    const data = await response.json();
    setUser(data);
  };

  const updateProduct = async (product, id) => {
    // make put request to create product
    await fetch(productsUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(product),
    });
    // update list of product
    getProduct();
  };

  const updateUser = async (user, id) => {
    await fetch(usersUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    });
    getUser();
  };

  const deleteProduct = async (id) => {
    // make delete request to create people
    await fetch(productsUrl + id, {
      method: "DELETE",
    });
    // update list of product
    getProduct();
  };
  
  const deleteUser = async (id) => {
    await fetch(usersUrl + id, {
      method: "DELETE",
    });
    getUser();
  };

  useEffect(() => {getProduct()}, []);
  useEffect(() => {getUser()}, []);

  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <div>
        <Route exact path="/products">
          <Index role={props.role}/>
        </Route>
      </div>
      <Route
        path="/products/:id"
        render={(rp) => (
          <Show
            role={props.role}
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
      <Route
        path="/Account"
        render={(rp)=>(
          <Account 
            {...rp}
            user={user}
            updateUser={updateUser}
            deleteUser={deleteUser} 
          />
        )}
      />
    </main>
  );
};

export default Main;
