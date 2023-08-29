import { registration } from "../api/userAPI";

const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const LOGOUT = "auth-reducer/LOGOUT";

let initialState = {
  email: null,
  password: null,
  isLogin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...state, ...action.logout };

    default:
      return state;
  }
};

export const setUserData = (email, password, isLogin) => {
  return {
    type: SET_USER_DATA,
    payload: { email, password, isLogin },
  };
};

export const logout = (email, password, isLogin) => {
  return {
    type: LOGOUT,
    logout: { email, password, isLogin },
  };
};
