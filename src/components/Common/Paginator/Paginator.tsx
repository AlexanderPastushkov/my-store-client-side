import React, { useEffect, useState } from "react";
import s from "./Paginator.module.css";
import { Button } from "../../StyledComponents/Button.js";

type PropsType = {
  pageSize: number;
  isLoading?: boolean;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  totalItemsCount: number;
  portionSize?: number;
};
const Paginator: React.FC<PropsType> = ({
  pageSize,
  currentPage,
  isLoading,
  onPageChanged,
  totalItemsCount,
  portionSize = 5, //quantity of pages what we see on desctop
}) => {
  let pagesCount = Math.ceil(
    totalItemsCount / pageSize // округляем до большего чтоб все страницы отображались
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i); //create empty array and push count of pages in?start with 1
  }

  let portionCount = Math.ceil(pagesCount / portionSize); //quantity of portions, we divide our all pages on 10
  let [portionNumber, setPortionNumber] = useState<number>(
    Math.floor(currentPage / 10) + 1 //rounded to down 1.1--->1 ect.
  );
  useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize)); //Math.ceil rounded our integer UP
  }, [currentPage]); //при уходе со страницы юзеров на другую и при повторном возвращении на неё,
  // пагинация подгоняется под текущую страницу юзеров, которая записана в userReducer,

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination}>
      {portionNumber > 1 && (
        <Button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            onPageChanged(currentPage - 1);
          }}
        >
          PREV
        </Button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p, index) => (
          <span
            key={index}
            className={currentPage === p ? s.selectedPage : s.nonSelected}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      {portionCount > portionNumber && (
        <Button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onPageChanged(currentPage + 1);
          }}
        >
          NEXT
        </Button>
      )}
    </div>
  );
};

export default Paginator;
