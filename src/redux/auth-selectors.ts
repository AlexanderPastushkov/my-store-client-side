import { AppStateType } from "../toolkitRedux/index.js";

export const getUserEmail = (state: AppStateType) => {
  return state.authPage.email;
};

export const getUserPassword = (state: AppStateType) => {
  return state.authPage.password;
};
export const getIsLoginBollean = (state: AppStateType) => {
  return state.authPage.isLogin;
};
