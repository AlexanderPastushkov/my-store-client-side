// import { Rating } from "./../components/Common/Rating/Rating";
import { createSlice } from "@reduxjs/toolkit";

type Rating = {
  id: number;
  rate: number;
  productID: number;
};
type RatingState = {
  rating: Rating[];
};
const initialState: RatingState = {
  rating: [],
};
const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRating(state, action) {
      state.rating = action.payload;
    },
  },
});
export const { setRating } = ratingSlice.actions; //export actions
export default ratingSlice.reducer;
