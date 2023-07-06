import React, { useEffect, useState } from "react";
import Title from "./Title/Title";
import s from "./Cart.module.css";
import CartHeader from "./CartHeader/CartHeader";
import CartProduct from "./CartProduct/CartProduct";
import CartFooter from "./CartFooter/CartFooter";

export default function Cart() {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  const deleteProduct = (id) => {
    setBackendData((backendData) => {
      return backendData.filter((product) => id !== product.id);
    });
  };
  const increase = (id) => {
    console.log("INCREASE", id);
    setBackendData((backendData) => {
      return backendData.map((product) => {
        if (product.id === id && product.count < 10) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    });
  };
  const decrease = (id) => {
    setBackendData((backendData) => {
      return backendData.map((product) => {
        if (product.id === id && product.count > 1) {
          return {
            ...product,
            count: product.count - 1,
            priceTotal: (product.count - 1) * product.price,
          };
        }
        return product;
      });
    });
  };
  const products = backendData.map((product) => {
    return (
      <CartProduct
        deleteProduct={deleteProduct}
        product={product}
        key={product.id}
        increase={increase}
        decrease={decrease}
      />
    );
  });

  return (
    <div className={s.cart}>
      <Title />
      {/* <CartHeader /> */}
      <div className={s.products}>{products}</div>
      <CartFooter />
    </div>
  );
}
