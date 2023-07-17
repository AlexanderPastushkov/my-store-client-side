import React from "react";
import s from "./Product.module.css";
import { NavLink } from "react-router-dom";

export default function Product({ product, onAdd }) {
  const { image, title, priceTotal, price, id, count } = product;
  return (
    <section>
      <div className={s.product}>
        <NavLink className={s.title} to={`/product/${id}`}>
          {title}
        </NavLink>
        <div className={s.image}>
          <img className={s.img} src={image} alt={title} />
        </div>

        <div className={s.price}>$ {price}</div>
        <div className={s.addbutton}>
          <button onClick={() => onAdd(product)} className={s.btn}>
            add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
