import React from "react";
import s from "../Cart.module.css";
import Count from "../Count/Count";
import deleteBtn from "../../../../Images/Cart/cross.svg";
import { Image } from "../../../Common/Image/Image";
import { useDispatch } from "react-redux";
import { deleteBasketItems } from "../../../../redux/basket-reducer";

export function CartProduct({ product }) {
  const { img, name, priceTotal, price, id, count } = product;
  const dispatch = useDispatch();
  return (
    <section className={s.product}>
      <div className={s.productImg}>
        <Image img={img} name={name} />
      </div>
      <div className={s.productTitle}>{name}</div>
      <Count count={count} product={product} />
      <div className={s.productPrice}>{price} usd</div>
      <div className={s.productPrice}>{priceTotal} usd</div>
      <div className={s.productControls}>
        <button
          type="button"
          onClick={() => dispatch(deleteBasketItems(product))}
        >
          <img className={s.deleteBtn} src={deleteBtn} alt="delete" />
        </button>
      </div>
    </section>
  );
}
