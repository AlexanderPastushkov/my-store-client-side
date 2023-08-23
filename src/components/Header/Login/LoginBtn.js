import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../Utils/consts";
import s from "./Login.module.css";
import { useDispatch } from "react-redux";

export const LoginBtn = ({ isLogin, email, logout }) => {
  const dispatch = useDispatch();
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
              onClick={() => dispatch(logout(null, null, false))}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
