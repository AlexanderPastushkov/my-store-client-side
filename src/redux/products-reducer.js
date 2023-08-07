import { productsAPI } from "../api/api";
const SET_PRODUCTS = "products/SET_PRODUCTS";

let initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };

    default:
      return state;
  }
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

//========================================================================================================================================================
//thunk-creators
export const requestProducts = (value) => {
  return async (dispatch) => {
    let data = await productsAPI.getProducts(value); //axios.create -> we make request from DAL

    dispatch(setProducts(data));
  };
}; //пример замыкания

export default productsReducer;
