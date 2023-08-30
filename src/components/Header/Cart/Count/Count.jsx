import React from "react";
import s from "../Cart.module.css";
import upArrow from "../../../../Images/Cart/up-arrow.svg";
import downArrow from "../../../../Images/Cart/down-arrow.svg";
import {
  changeValueOfBasketItems,
  decreaseBasketItems,
  increaseBasketItems,
} from "../../../../redux/basket-reducer";
import { useDispatch } from "react-redux";

export default function Count({ count, product }) {
  const dispatch = useDispatch();
  return (
    <div className={s.productCount}>
      <div className={s.count}>
        <input
          className={s.cartInput}
          min={1}
          max={10}
          value={count}
          type="number"
          onChange={(e) => {
            dispatch(changeValueOfBasketItems(product.id, +e.target.value));
          }}
        />
      </div>
      <div className={s.countControls}>
        <div>
          <button
            className={s.countBtn}
            onClick={() => {
              dispatch(increaseBasketItems(product));
            }}
          >
            <img className={s.arrBtn} src={upArrow} alt="increase" />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(decreaseBasketItems(product));
            }}
            className={s.countBtn}
          >
            <img className={s.arrBtn} src={downArrow} alt="decrease" />
          </button>
        </div>
      </div>
    </div>
  );
}
