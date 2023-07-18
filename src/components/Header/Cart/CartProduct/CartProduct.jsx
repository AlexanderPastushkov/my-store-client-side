import React from "react";
import s from "../Cart.module.css";
import Count from "../Count/Count";
import deleteBtn from "../../../../Images/Cart/cross.svg";

export default function CartProduct({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) {
  const { image, title, priceTotal, price, id, count } = product;
  const priceFormatter = new Intl.NumberFormat();
  return (
    <section className={s.product}>
      <div className={s.productImg}>
        <img src={image} alt="product-image" />
      </div>
      <div className={s.productTitle}>{title}</div>
      <Count
        changeValue={changeValue}
        increase={increase}
        decrease={decrease}
        count={count}
        id={id}
      />
      <div className={s.productPrice}>{price} usd</div>
      <div className={s.productPrice}>{priceTotal} usd</div>
      <div className={s.productControls}>
        <button type="button" onClick={() => deleteProduct(id)}>
          <img className={s.deleteBtn} src={deleteBtn} alt="delete" />
        </button>
      </div>
    </section>
  );
}
