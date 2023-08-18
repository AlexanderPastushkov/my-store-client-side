import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../Utils/consts";
import s from "./Login.module.css";

export const Login = ({ isLogin, email, logout }) => {
  console.log(isLogin, email);
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
