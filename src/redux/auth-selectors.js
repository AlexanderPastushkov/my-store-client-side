export const getUserEmail = (state) => {
  return state.authPage.email;
};

export const getUserPassword = (state) => {
  return state.authPage.password;
};
export const getIsLoginBollean = (state) => {
  return state.authPage.isLogin;
};
