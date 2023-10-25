import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },
    setComment(state, action) {
      state.comments.push(action.payload);
    },
  },
});
export const { setComments, setComment } = commentsSlice.actions; //export actions
export default commentsSlice.reducer;
