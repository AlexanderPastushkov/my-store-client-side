import React from "react";
import { Auth } from "./Auth";
import { connect } from "react-redux";
import { getIsLoginBollean, getUserEmail } from "../../redux/auth-selectors";
import { getAuth, logout, setUserData } from "../../redux/auth-reducer";
import { login, registration } from "../../api/userAPI";

const AuthContainer = ({ setUserData, isLogin, logout }) => {
  return <Auth isLogin={isLogin} setUserData={setUserData} />;
};

const mapStateToProps = (state) => {
  return {
    email: getUserEmail(state),
    isLogin: getIsLoginBollean(state),
  };
};
export default connect(mapStateToProps, {
  setUserData,
  logout,
})(AuthContainer);
