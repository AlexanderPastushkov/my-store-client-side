import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./components/Header/Cart/Cart.jsx";
import Header from "./components/Header/Header";
import Home from "./components/Main/Home/Home.jsx";
import Catalog from "./components/Main/Catalog/Catalog.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, count: exist.count + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };
  return (
    <div className="wrapper">
      <Header countCartItems={cartItems.length} />
      <div className="wrapper_content">
        {/* <HelloFormBack /> */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                onAdd={onAdd}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/catalog" element={<Catalog onAdd={onAdd} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
