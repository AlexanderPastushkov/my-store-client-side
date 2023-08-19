import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../../Utils/consts";
import s from "./Login.module.css";

export const LoginBtn = ({ isLogin, email, logout }) => {
  return (
    <div>
      {!isLogin ? (
        <NavLink className={s.logoutBtn} to={LOGIN_ROUTE}>
          Login
        </NavLink>
      ) : (
        <div className={s.logoutItems}>
          <div>
            <span> {email}</span>
          </div>
          <div>
            <button
              className={s.logoutBtn}
              onClick={() => logout(null, null, false)}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
