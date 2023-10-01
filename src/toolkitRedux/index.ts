import { configureStore, combineReducers } from "@reduxjs/toolkit";

import commentsSlice from "./commentsSlice";
import productsReducer from "../redux/products-reducer";
import basketReducer from "../redux/basket-reducer";
import { authReducer } from "../redux/auth-reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import ratingSlice from "./ratingSlice";

const persistConfig = {
  key: "root",
  storage,
};

type ReducerType = typeof reducer;
export type AppStateType = ReturnType<ReducerType>;
const reducer = combineReducers({
  commentsPage: commentsSlice, //create with toolkit
  productsPage: productsReducer,
  basketPage: basketReducer,
  authPage: authReducer,
  ratingPage: ratingSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
