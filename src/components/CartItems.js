import React from "react";
import CartItem from "./CartItem";
import "../css/CartItems.css";

const CartItems = ({ heading, items }) => {
  return (
    <div className="CartItems">
      <div className="CartHeading">
        <h2>{heading}</h2>
      </div>

      <div className="container-cart-item">
        <hr />
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
