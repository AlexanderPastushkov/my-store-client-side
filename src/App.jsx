import { useSelector } from "react-redux";
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
import { Cart } from "./components/Header/Cart/Cart";
import Header from "./components/Header/Header";
import Catalog from "./components/Main/Catalog/Catalog.jsx";
import Home from "./components/Main/Home/Home.jsx";
import ProductItem from "./components/Main/ProductPage/ProductItem";
import { getItems } from "./redux/basket-selectors";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: var(--main-color);
`;

const WrapperContent = styled.div`
  background-color: var(--main-bgColor);
  color: var(--main-color);
  font-weight: bold;
  padding: 0 15px;
`;
export function App() {
  const basketItems = useSelector(getItems);

  return (
    <Wrapper>
      <Header countCartItems={basketItems.length} />
      <WrapperContent>
        <Routes>
          <Route exact path="/" element={<Navigate to={HOME_ROUTE} />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route
            path={CART_ROUTE}
            element={<Cart basketItems={basketItems} />}
          />
          <Route path={CATALOG_ROUTE} element={<Catalog />}>
            <Route path=":id" element={<Catalog />} />
          </Route>
          <Route path={LOGIN_ROUTE} element={<AuthContainer />} />
          <Route path={REGISTRATION_ROUTE} element={<AuthContainer />} />
          <Route path={PRODUCT_ROUTE} element={<ProductItem />}>
            <Route path=":id" element={<ProductItem />} />
          </Route>
          <Route path="*" element={<div> 404 PAGE NOT FOUND</div>} />
        </Routes>
      </WrapperContent>
      <Footer />
    </Wrapper>
  );
}
