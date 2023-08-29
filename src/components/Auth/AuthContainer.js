import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "../../Utils/consts";
import { logout, setUserData } from "../../redux/auth-reducer";
import { getIsLoginBollean, getUserEmail } from "../../redux/auth-selectors";
import { Login } from "./Login";
import { Registration } from "./Registartion";

const AuthContainer = ({ setUserData }) => {
  const currentLocation = useLocation();

  const isAuth = currentLocation.pathname === LOGIN_ROUTE;
  if (isAuth) {
    return <Login setUserData={setUserData} />;
  }
  return <Registration setUserData={setUserData} />;
};

export default connect(null, {
  setUserData,
})(AuthContainer);
