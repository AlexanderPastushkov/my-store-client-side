import React from "react";
import s from "./Header.module.css";
import logo from "../../Images/HeaderImg/LogoClothing.png";
import Nav from "./Nav/Nav.jsx";
import Cart from "./Cart/Cart.jsx";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo_links}>
        <div className={s.logo}>
          <img className={s.logoImg} src={logo} alt="Header Logo" />
        </div>
        <Nav />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
