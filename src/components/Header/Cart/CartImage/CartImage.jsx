import React from "react";
import cart from "../../../../Images/HeaderImg/cart.png";
import s from "./CartImage.module.css";
import { NavLink } from "react-router-dom";

export default function CartImage({ countCartItems }) {
  return (
    <div className={s.cartItem}>
      {countCartItems >= 1 && (
        <span className={s.countCartItems}>{countCartItems}</span>
      )}
      <NavLink to="/cart/" className={s.cartButton}>
        <img className={s.cart} src={cart} alt="cart" />
      </NavLink>
    </div>
  );
}
