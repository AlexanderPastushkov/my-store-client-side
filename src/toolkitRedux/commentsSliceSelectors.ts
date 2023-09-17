import { AppStateType } from "./index.js";

export const takeComments = (state: AppStateType) => {
  return state.commentsPage.comments;
};
