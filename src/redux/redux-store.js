import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import productsReducer from "./products-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunkMiddleware from "redux-thunk";
import basketReducer from "./basket-reducer";

let reducers = combineReducers({
  productsPage: productsReducer,
  basketPage: basketReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;
export const persistor = persistStore(store);

export default store; //export to Provider

//========================================================================================================================================================
