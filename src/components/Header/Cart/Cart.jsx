import React, { useEffect, useState } from "react";
import Title from "./Title/Title";
import s from "./Cart.module.css";
import CartHeader from "./CartHeader/CartHeader";
import CartProduct from "./CartProduct/CartProduct";
import CartFooter from "./CartFooter/CartFooter";

export default function Cart({ cartItems, setCartItems }) {
  const [total, setTotal] = useState({
    price: cartItems.reduce((prev, curr) => prev + +curr.priceTotal, 0),
    count: cartItems.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cartItems
        .reduce((prev, curr) => prev + +curr.priceTotal, 0)
        .toFixed(2),
      count: cartItems.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [cartItems]);

  const deleteProduct = (id) => {
    setCartItems((cartItems) => {
      return cartItems.filter((product) => id !== product.id);
    });
  };
  const increase = (id) => {
    setCartItems((cartItems) => {
      return cartItems.map((product) => {
        if (product.id === id && product.count < 10) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: ((product.count + 1) * product.price).toFixed(2),
          };
        }
        return product;
      });
    });
  };
  const decrease = (id) => {
    setCartItems((cartItems) => {
      return cartItems.map((product) => {
        if (product.id === id && product.count > 1) {
          return {
            ...product,
            count: product.count - 1,
            priceTotal: ((product.count - 1) * product.price).toFixed(2),
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    if (value <= 10)
      setCartItems((cartItems) => {
        return cartItems.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              count: value,
              priceTotal: (value * product.price).toFixed(2),
            };
          }
          return product;
        });
      });
  };

  const products = cartItems.map((product) => {
    return (
      <CartProduct
        deleteProduct={deleteProduct}
        product={product}
        key={product.id}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });

  return (
    <div className={s.cart}>
      <Title />
      {/* <CartHeader /> */}
      {cartItems.length === 0 && <div>Cart is empty</div>}
      <div className={s.products}>{products}</div>
      <CartFooter total={total} />
    </div>
  );
}
