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
  refreshRating: () => void;
};

export const Rating: React.FC<Props> = ({ id, refreshRating }) => {
  const [localRating, setLocalRating] = useState(0);
  const [hover, setHover] = useState(0);
  useEffect(() => {
    const createRate = async (id: number, localRating: number) => {
      if (isLogin) {
        await createRating(localRating, id);

        refreshRating();
      } else {
        navigateToRoute(LOGIN_ROUTE);
      }
    };
    if (localRating !== 0) {
      createRate(id, localRating);
    }
    refreshRating();
  }, [id, localRating]);

  const navigateToRoute = useNavigate();
  const isLogin = useAppSelector(getIsLoginBollean);

  const rating = useAppSelector(takeRating);
  console.log(rating);
  const averageRate = +(
    rating.map((el) => el.rate).reduce((acc, cur) => acc + cur, 0) /
    rating.length
  ).toFixed(2);
  console.log(averageRate);

  return (
    <>
      <div className={s.starItems}>
        {[...Array(5)].map((star, index) => {
          const currentRate = index + 1;
          return (
            <div key={index}>
              <label>
                <input
                  className={s.inputStar}
                  onClick={() => setLocalRating(currentRate)}
                  value={currentRate}
                  type="radio"
                  name="rate"
                />
                <FaStar
                  className={s.star}
                  size={50}
                  color={
                    currentRate <= (hover || averageRate) ? "yellow" : "grey"
                  }
                  onMouseEnter={() => setHover(currentRate)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            </div>
          );
        })}
      </div>
      {averageRate ? (
        <p>Your rating is {averageRate}</p>
      ) : (
        <p>You can rate this product</p>
      )}
    </>
  );
};
