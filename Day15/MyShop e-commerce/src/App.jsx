import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Contactus from "./Contactus";
import MyCart from "./MyCart";
import Description from "./Description";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (datas) => {
    const existingItem = cartItems.find(
      (cartItems) => cartItems.id === datas.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
      alert(`Item ${item.title} added ${existingItem.quantity}X to the cart`);
    } else {
      setCartItems([...cartItems, { ...datas, quantity: 1 }]);
      alert("Item Added");
    }
  };

  const removeItem = (itemId) => {
    const updateCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updateCart);
    alert("Item removed");
  };

  return (
    <BrowserRouter>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/mycart"
            element={<MyCart cartItems={cartItems} removeItem={removeItem} />}
          />
          <Route path="/contactus" element={<Contactus />} />
          <Route
            path="/description/:id"
            element={<Description addToCart={addToCart} />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
