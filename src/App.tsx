import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HelloFormBack from "./components/Backend/HelloFormBack";
import Footer from "./components/Footer/Footer.jsx";
import Content from "./components/Main/Content.jsx";
import Cart from "./components/Header/Cart/Cart.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper_content">
        {/* <HelloFormBack /> */}

        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
