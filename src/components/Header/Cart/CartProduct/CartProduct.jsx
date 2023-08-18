import React from "react";
import s from "../Cart.module.css";
import Count from "../Count/Count";
import deleteBtn from "../../../../Images/Cart/cross.svg";
import { Image } from "../../../Common/Image/Image";

export default function CartProduct({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) {
  const { img, name, priceTotal, price, id, count } = product;
  const priceFormatter = new Intl.NumberFormat();
  return (
    <section className={s.product}>
      <div className={s.productImg}>
        <Image img={img} name={name} />
      </div>
      <div className={s.productTitle}>{name}</div>
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
