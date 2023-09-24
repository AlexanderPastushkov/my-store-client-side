import { AppStateType } from "./index.js";

export const takeRating = (state: AppStateType) => {
  return state.ratingPage.rating;
};
