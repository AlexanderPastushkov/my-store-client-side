import { AppStateType } from "../toolkitRedux/index.js";

export const getItems = (state: AppStateType) => {
  return state.basketPage.basketItems;
};
