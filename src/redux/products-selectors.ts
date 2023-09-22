import { AppStateType } from "../toolkitRedux/index.js";

export const getProducts = (state: AppStateType) => {
  return state.productsPage.products;
};
export const getCarouselProducts = (state: AppStateType) => {
  return state.productsPage.carouselProducts;
};
export const getBrands = (state: AppStateType) => {
  return state.productsPage.brands;
};
