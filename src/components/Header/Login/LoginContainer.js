import React from "react";
import { connect } from "react-redux";
import { getIsLoginBollean, getUserEmail } from "../../../redux/auth-selectors";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../Utils/consts";
import { logout } from "../../../redux/auth-reducer";
import { Login } from "./Login";

const LoginContainer = ({ isLogin, email, logout }) => {
  console.log(isLogin, email);
  return <Login isLogin={isLogin} email={email} logout={logout} />;
};
const mapStateToProps = (state) => {
  return {
    email: getUserEmail(state),
    isLogin: getIsLoginBollean(state),
  };
};
export default connect(mapStateToProps, { logout: logout })(LoginContainer);
