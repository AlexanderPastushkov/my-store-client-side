import { Rating } from "./Rating";
import React from "react";

import { setRating } from "../../../toolkitRedux/ratingSlice";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";

interface Props {
  id: number;
}

export const RatingContainer = ({ id }: Props) => {
  const dispatch = useAppDispatch();

  const refreshRating = () => {
    const fetchData = async (id: number) => {
      const response = await fetch(`/api/rating/${id}`);
      const json = await response.json();

      dispatch(setRating(json));
    };
    fetchData(id);
  };

  return (
    <>
      <Rating refreshRating={refreshRating} id={id} />
    </>
  );
};
