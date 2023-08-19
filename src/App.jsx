import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import {
  CART_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from "./Utils/consts";
import AuthContainer from "./components/Auth/AuthContainer";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/Header/Cart/Cart.jsx";
import Header from "./components/Header/Header";
import Catalog from "./components/Main/Catalog/Catalog.jsx";
import Home from "./components/Main/Home/Home.jsx";
import ProductItem from "./components/Main/ProductPage/ProductPage";
import { setUserData } from "./redux/auth-reducer";
import { getIsLoginBollean } from "./redux/auth-selectors";
import { setBasketItem } from "./redux/basket-reducer";
import { getItems } from "./redux/basket-selectors";

function App({ basketItems, setBasketItem }) {
  const onAdd = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist) {
      setBasketItem(
        basketItems.map((x) =>
          x.id === product.id ? { ...exist, count: exist.count + 1 } : x
        )
      );
    } else {
      setBasketItem([...basketItems, { ...product, count: 1 }]);
    }
  };

  return (
    <div className="wrapper">
      <Header countCartItems={basketItems.length} />
      <div className="wrapper_content">
        <Routes>
          <Route exact path="/" element={<Navigate to={HOME_ROUTE} />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route
            path={CART_ROUTE}
            element={
              <Cart setCartItems={setBasketItem} basketItems={basketItems} />
            }
          />
          <Route path={CATALOG_ROUTE} element={<Catalog onAdd={onAdd} />} />
          <Route path={LOGIN_ROUTE} element={<AuthContainer />} />
          <Route path={REGISTRATION_ROUTE} element={<AuthContainer />} />
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
    isLogin: getIsLoginBollean(state),
  };
};

export default connect(mapStateToProps, {
  setBasketItem: setBasketItem,
  setUserData: setUserData,
  // onAdd: onAdd,
})(App);
