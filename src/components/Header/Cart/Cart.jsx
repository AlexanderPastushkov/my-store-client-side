import React, { useEffect, useState } from "react";
import Title from "./Title/Title";
import s from "./Cart.module.css";
import CartProduct from "./CartProduct/CartProduct";
import CartFooter from "./CartFooter/CartFooter";

export function Cart({ basketItems }) {
  const [total, setTotal] = useState({
    price: basketItems.reduce((prev, curr) => prev + +curr.priceTotal, 0),
    count: basketItems.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: +basketItems
        .reduce((prev, curr) => prev + +curr.priceTotal, 0)
        .toFixed(2),
      count: basketItems.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [basketItems]);

  const products = basketItems.map((product) => {
    return <CartProduct product={product} key={product.id} />;
  });

  return (
    <div className={s.cart}>
      <Title />
      {basketItems.length === 0 && <div>Cart is empty</div>}
      <div className={s.products}>{products}</div>
      <CartFooter total={total} />
    </div>
  );
}
