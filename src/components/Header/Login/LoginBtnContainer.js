import { useSelector } from "react-redux";
import { logout } from "../../../redux/auth-reducer";
import { getIsLoginBollean, getUserEmail } from "../../../redux/auth-selectors";
import { LoginBtn } from "./LoginBtn";

export const LoginBtnContainer = () => {
  const email = useSelector(getUserEmail);
  const isLogin = useSelector(getIsLoginBollean);

  return <LoginBtn isLogin={isLogin} email={email} logout={logout} />;
};
