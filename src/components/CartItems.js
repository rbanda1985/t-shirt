import React from "react";
import CartItem from "./CartItem";
import "../css/CartItems.css";

const CartItems = ({ heading, items, setCartItems }) => {
  const changeItemQuantity = (e, index) => {
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  const deleteItem = indexToDelete => {
    const newItems = items.filter((value, index) => {
      return index !== indexToDelete;
    });
    setCartItems(newItems);
  };
  return (
    <div className="CartItems">
      <div className="CartHeading">
        <h2>{heading}</h2>
      </div>

      <div className="container-cart-item">
        <hr />
        {items.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            changeItemQuantity={changeItemQuantity}
            index={index}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
