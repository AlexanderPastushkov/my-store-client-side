import React from "react";
import s from "../Cart.module.css";

export default function CartFooter() {
  return (
    <div className={s.cartFooter}>
      <div className={s.cartFooter__count}>3 pcs.</div>
      <div className={s.cartFooter__price}>3000usd</div>
    </div>
  );
}
