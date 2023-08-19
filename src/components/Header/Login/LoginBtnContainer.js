import { connect } from "react-redux";
import { logout } from "../../../redux/auth-reducer";
import { getIsLoginBollean, getUserEmail } from "../../../redux/auth-selectors";
import { LoginBtn } from "./LoginBtn";

const LoginBtnContainer = ({ isLogin, email, logout }) => {
  return <LoginBtn isLogin={isLogin} email={email} logout={logout} />;
};
const mapStateToProps = (state) => {
  return {
    email: getUserEmail(state),
    isLogin: getIsLoginBollean(state),
  };
};
export default connect(mapStateToProps, { logout: logout })(LoginBtnContainer);
