import { useSelector } from "react-redux";
import { logout } from "../../../redux/auth-reducer";
import { getIsLoginBollean, getUserEmail } from "../../../redux/auth-selectors";
import { LoginBtn } from "./LoginBtn";

export const LoginBtnContainer = () => {
  const email = useSelector((state) => getUserEmail(state));
  const isLogin = useSelector((state) => getIsLoginBollean(state));

  return <LoginBtn isLogin={isLogin} email={email} logout={logout} />;
};
