import React from "react";
import s from "./Product.module.css";

export default function Product({ product, onAdd }) {
  const { image, title, priceTotal, price, id, count } = product;
  return (
    <section>
      <div className={s.product}>
        <div className={s.title}>{title}</div>
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
