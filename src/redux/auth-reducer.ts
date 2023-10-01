const SET_USER_DATA = "auth-reducer/SET_USER_DATA";
const LOGOUT = "auth-reducer/LOGOUT";
export type InitialStateType = {
  email: null | string;
  password: null | string;
  isLogin: boolean;
};
let initialState: InitialStateType = {
  email: null,
  password: null,
  isLogin: false,
};

export const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...state, ...action.logout };

    default:
      return state;
  }
};

type ActionsTypes = SetUserDataType | LogoutType;

type SetUserDataActionPayloadType = {
  email: string | null;
  password: string | null;
  isLogin: boolean;
};

type SetUserDataType = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataActionPayloadType;
};
type LogoutType = {
  type: typeof LOGOUT;
  logout: SetUserDataActionPayloadType;
};
export const setUserData = (
  email: string,
  password: string,
  isLogin: boolean
): SetUserDataType => {
  return {
    type: SET_USER_DATA,
    payload: { email, password, isLogin },
  };
};

export const logout = (
  email: string | null,
  password: string | null,
  isLogin: boolean
): LogoutType => {
  return {
    type: LOGOUT,
    logout: { email, password, isLogin },
  };
};
