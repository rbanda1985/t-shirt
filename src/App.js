import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import items from "./items/items";

function App() {
  const [cartItems, setCartItems] = useState(items);
  return (
    <div className="app">
      <Header title="T-Shirt-Store" />
      <div className="app-main">
        <CartItems
          heading="Shopping Cart"
          items={cartItems}
          setCartItems={setCartItems}
        />
        <CartTotal items={cartItems} />
      </div>
    </div>
  );
}

export default App;
