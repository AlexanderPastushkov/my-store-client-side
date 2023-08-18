import React from "react";
import s from "../Cart.module.css";

export default function CartFooter({ total }) {
  console.log(total);
  const { count, price } = total;
  return (
    <div className={s.cartFooter}>
      <div className={s.cartFooter__count}>total count: {count}</div>
      <div className={s.cartFooter__price}>total price: {+price}</div>
    </div>
  );
}
