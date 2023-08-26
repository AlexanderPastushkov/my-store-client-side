import { productsAPI } from "../api/api";
const SET_PRODUCTS = "products/SET_PRODUCTS";
const SET_CAROUSEL_PRODUCTS = "products/SET_CAROUSEL_PRODUCTS";
const SET_BRANDS = "products/SET_BRANDS";

let initialState = {
  products: [],
  carouselProducts: [],
  brands: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case SET_CAROUSEL_PRODUCTS:
      return { ...state, carouselProducts: action.items };
    case SET_BRANDS:
      return { ...state, brands: action.brands };
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
export const setCarouselProducts = (items) => {
  return {
    type: SET_CAROUSEL_PRODUCTS,
    items,
  };
};
export const setBrands = (brands) => {
  return {
    type: SET_BRANDS,
    brands,
  };
};

//========================================================================================================================================================
//thunk-creators
export const requestFilteredProducts = (value) => {
  return async (dispatch) => {
    let data = await productsAPI.getFilteredItems(value); //axios.create -> we make request from DAL
    dispatch(setProducts(data));
  };
}; //пример замыкания

export const requestAllProducts = () => {
  return async (dispatch) => {
    let data = await productsAPI.getAllItems(); //axios.create -> we make request from DAL
    console.log(data);
    dispatch(setCarouselProducts(data));
  };
};
export const requestAllBrands = () => {
  return async (dispatch) => {
    let data = await productsAPI.getAllBrands(); //axios.create -> we make request from DAL
    console.log(data);
    dispatch(setBrands(data));
  };
};
export default productsReducer;
