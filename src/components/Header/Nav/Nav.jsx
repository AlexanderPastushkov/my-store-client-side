import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import { CATALOG_ROUTE, HOME_ROUTE } from "../../../Utils/consts";

const activeLink = ({ isActive }) => (isActive ? s.active : s.item); //isActive - atribute of Navlink
const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.links}>
        <li className={s.link}>
          <NavLink to={HOME_ROUTE} className={activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={CATALOG_ROUTE} className={activeLink}>
            Catalog
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={activeLink}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className={activeLink}>
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
