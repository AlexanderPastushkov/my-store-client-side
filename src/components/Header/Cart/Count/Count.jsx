import React from "react";
import s from "../Cart.module.css";
import upArrow from "../../../../Images/Cart/up-arrow.svg";
import downArrow from "../../../../Images/Cart/down-arrow.svg";

export default function Count({ increase, count, id, decrease }) {
  return (
    <div className={s.productCount}>
      <div className={s.count}>
        <span>{count}</span>
      </div>
      <div className={s.countControls}>
        <div>
          <button
            className={s.countBtn}
            onClick={() => {
              increase(id);
            }}
          >
            <img className={s.arrBtn} src={upArrow} alt="increase" />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              decrease(id);
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
