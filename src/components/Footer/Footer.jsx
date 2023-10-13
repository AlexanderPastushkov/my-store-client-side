import React from "react";
import s from "./Footer.module.css";
import { Flex } from "../StyledComponents/Flex";
import { NavLink } from "react-router-dom";
import { PRIVACY_ROUTE } from "../../Utils/consts";

export default function Footer() {
  const activeLink = ({ isActive }) => (isActive ? s.active : s.item);
  return (
    <footer className={s.footerItems}>
      <Flex margin="10px" justify="space-between" align="center">
        <div>© 2023 All Rights Reserved</div>
        <nav>
          <ul className={s.links}>
            <li>
              <NavLink className={activeLink} to={PRIVACY_ROUTE}>
                Privacy Policy
              </NavLink>
            </li>

            <li>
              <NavLink className={activeLink} to="">
                Legal
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="">
                Site Map
              </NavLink>
            </li>
          </ul>
        </nav>
      </Flex>
    </footer>
  );
}
