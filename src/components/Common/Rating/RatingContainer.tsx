import { Rating } from "./Rating";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import s from "./Rating.module.css";

import { setRating } from "../../../toolkitRedux/ratingSlice";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { takeRating } from "../../../toolkitRedux/ratingSliceSelectors";
import { getIsLoginBollean } from "../../../redux/auth-selectors";
import { useNavigate } from "react-router-dom";
import { createRating } from "../../../api/ratingAPI.js";
import { LOGIN_ROUTE } from "../../../Utils/consts.js";

type Props = {
  id: number;
};

export const RatingContainer: React.FC<Props> = ({ id }) => {
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
