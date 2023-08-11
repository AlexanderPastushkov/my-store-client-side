// import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/Header/Cart/Cart.jsx";
import Header from "./components/Header/Header";
import Catalog from "./components/Main/Catalog/Catalog.jsx";
import Home from "./components/Main/Home/Home.jsx";
import ProductItem from "./components/Main/ProductPage/ProductPage";
import {
  CART_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
  PRODUCT_ROUTE,
} from "./Utils/consts";
import { connect } from "react-redux";
import { getItems } from "./redux/basket-selectors";
import { setBasketItems } from "./redux/basket-reducer";

function App({ basketItems, setBasketItems }) {
  // let cartFromLocalStorage;
  // try {
  //   cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  // } catch (e) {
  //   cartFromLocalStorage = {};
  // }

  const isAuth = true;
  // const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === product.id ? { ...exist, count: exist.count + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, count: 1 }]);
    }
  };
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);
  return (
    <div className="wrapper">
      <Header countCartItems={basketItems.length} />
      <div className="wrapper_content">
        <Routes>
          <Route exact path="/" element={<Navigate to={HOME_ROUTE} />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          {isAuth && (
            <Route
              path={CART_ROUTE}
              element={
                <Cart setCartItems={setBasketItems} cartItems={basketItems} />
              }
            />
          )}
          <Route path={CATALOG_ROUTE} element={<Catalog onAdd={onAdd} />} />
          <Route path={PRODUCT_ROUTE} element={<ProductItem onAdd={onAdd} />}>
            <Route path=":id" element={<ProductItem onAdd={onAdd} />} />
          </Route>
          <Route path="*" element={<div> 404 PAGE NOT FOUND</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    basketItems: getItems(state),
  };
};

export default connect(mapStateToProps, { setBasketItems: setBasketItems })(
  App
);
