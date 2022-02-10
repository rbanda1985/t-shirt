import React, { useState } from "react";
import "../css/CartItem.css";

const CartItem = ({ item, changeItemQuantity, index }) => {
  return (
    <div className="CartItem-container">
      <div className="cartItem-image">
        <img src={item.image} alt="" />
      </div>
      <div className="cartItem-info">
        <div className="cartItem-title">
          <h2>{item.title}</h2>
        </div>
        <div className="cartItem-stock">{item.stock}</div>
        <div className="cart-item-selection">
          <div className="cartItem-quantity">
            <select
              value={item.quantity}
              onChange={e => changeItemQuantity(e, index)}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
            </select>
          </div>
          <p>|</p>
          <div className="cartItem-delete">Delete</div>
        </div>
      </div>
      <div className="cartItem-price">{item.price}</div>
    </div>
  );
};

export default CartItem;
