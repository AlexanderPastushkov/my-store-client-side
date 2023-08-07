import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import productsReducer from "./products-reducer";

import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  productsPage: productsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store; //export to Provider

//========================================================================================================================================================
