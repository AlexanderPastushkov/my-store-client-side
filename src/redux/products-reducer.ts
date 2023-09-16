import { BrandsType, ProductsType } from "../Types/types.js";
import { productsAPI } from "../api/api";
const SET_PRODUCTS = "products/SET_PRODUCTS";
const SET_CAROUSEL_PRODUCTS = "products/SET_CAROUSEL_PRODUCTS";
const SET_BRANDS = "products/SET_BRANDS";
type CarouselProducts = {
  count: number;
  rows: Array<ProductsType>;
};
type InitialStateType = {
  products: Array<ProductsType>;
  carouselProducts: CarouselProducts | object;
  brands: Array<BrandsType>;
};
let initialState: InitialStateType = {
  products: [],
  carouselProducts: {},
  brands: [],
};

const productsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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

type SetProductsType = {
  type: typeof SET_PRODUCTS;
  products: Array<ProductsType>;
};
export const setProducts = (products: Array<ProductsType>): SetProductsType => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

type SetCarouselProductsType = {
  type: typeof SET_CAROUSEL_PRODUCTS;
  items: Array<ProductsType>;
};
export const setCarouselProducts = (
  items: Array<ProductsType>
): SetCarouselProductsType => {
  return {
    type: SET_CAROUSEL_PRODUCTS,
    items,
  };
};

type SetBrandsType = {
  type: typeof SET_BRANDS;
  brands: Array<BrandsType>;
};
export const setBrands = (brands: Array<BrandsType>): SetBrandsType => {
  return {
    type: SET_BRANDS,
    brands,
  };
};

//========================================================================================================================================================
//thunk-creators
export const requestFilteredProducts = (value: string) => {
  return async (dispatch: any) => {
    let data = await productsAPI.getFilteredItems(value); //axios.create -> we make request from DAL
    dispatch(setProducts(data));
  };
}; //пример замыкания

export const requestAllProducts = () => {
  return async (dispatch: any) => {
    let data = await productsAPI.getAllItems(); //axios.create -> we make request from DAL
    console.log(data);
    dispatch(setCarouselProducts(data));
  };
};
export const requestAllBrands = () => {
  return async (dispatch: any) => {
    let data = await productsAPI.getAllBrands(); //axios.create -> we make request from DAL
    console.log(data);
    dispatch(setBrands(data));
  };
};
export default productsReducer;
