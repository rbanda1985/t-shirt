import React, { useState } from "react";
import "../css/CartTotal.css";
import NumberFormat from "react-number-format";

const CartTotal = ({ items }) => {
  const getTotalPrice = () => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="cart-total-container">
      <h2>Sub Total</h2>
      <div className="cart-total-header">
        <span className="cartTotal-price">
          <NumberFormat
            value={getTotalPrice()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </span>
      </div>
      <div className="cart-total-checkout">
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
