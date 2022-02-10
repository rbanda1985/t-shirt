import React, { useState } from "react";
import "../css/CartItem.css";

const CartItem = ({ item }) => {
  let initialQuantity = item.quantity;
  const [quantity, setQuantity] = useState(initialQuantity);
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
              value={quantity}
              onChange={e => setQuantity({ quantity: e.target.value })}
            >
              <option value={quantity}>Qty: 1</option>
              <option value={quantity}>Qty: 2</option>
              <option value={quantity}>Qty: 3</option>
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
