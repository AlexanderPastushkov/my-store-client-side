import {
  InitialStateType,
  authReducer,
  logout,
  setUserData,
} from './auth-reducer';

let state: InitialStateType;

beforeEach(() => {
  state = {
    email: 'sanek@gmail.com',
    password: 'passs',
    isLogin: false,
  };
});

test('set user data success', () => {
  const newState = authReducer(
    state,
    setUserData('sanek@gmail.com', 'passs', true)
  );

  expect(newState.isLogin).toBeTruthy();
  expect(newState.email).toBe('sanek@gmail.com');
});
test('logout success', () => {
  const newState = authReducer(state, logout(null, null, false));

  expect(newState.isLogin).toBeFalsy();
  expect(newState.email).toBe(null);
});
