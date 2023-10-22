import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../Utils/consts";
import s from "./Login.module.css";
// import "../../../css/common.css";
import { useDispatch } from "react-redux";
import { Button } from "../../StyledComponents/Button";

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
            <Button
              backgroundColor="rgb(13, 125, 217)"
              backgroundColorHover="rgb(1, 100, 181)"
              onClick={() => dispatch(logout(null, null, false))}
            >
              Log out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
