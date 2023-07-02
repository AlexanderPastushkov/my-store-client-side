import React from "react";
import cart from "../../../Images/HeaderImg/cart.png";
import s from "./Cart.module.css";

export default function Cart() {
  return (
    <div className={s.cartItem}>
      <img className={s.cart} src={cart} alt="cart" />
    </div>
  );
}
