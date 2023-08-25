import logo from "../../Images/HeaderImg/LogoClothing.png";
import Search from "./Search/Search";

import CartImage from "./Cart/CartImage/CartImage.jsx";
import s from "./Header.module.css";
import { LoginBtnContainer } from "./Login/LoginBtnContainer";
import { Nav } from "./Nav/Nav.jsx";

const Header = ({ countCartItems }) => {
  return (
    <header className={s.header}>
      <div className={s.logo_links}>
        <div className={s.logo}>
          <img className={s.logoImg} src={logo} alt="Header Logo" />
        </div>
        <Nav />
        <Search />
        <LoginBtnContainer />
        <CartImage countCartItems={countCartItems} />
      </div>
    </header>
  );
};

export default Header;
