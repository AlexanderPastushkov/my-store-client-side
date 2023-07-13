import React from "react";
import cart from "../../../../Images/HeaderImg/cart.png";
import s from "./CartImage.module.css";
import { NavLink } from "react-router-dom";

export default function CartImage({ countCartItems }) {
  return (
    <div className={s.cartItem}>
      <NavLink to="/cart/" className={s.cartButton}>
        {countCartItems >= 1 && (
          <p className={s.countCartItems}>{countCartItems}</p>
        )}
        <img className={s.cart} src={cart} alt="cart" />
      </NavLink>
    </div>
  );
}
