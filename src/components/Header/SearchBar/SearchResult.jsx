import React from "react";
import s from "./SearchBar.module.css";

export const SearchResult = ({ el, setInput, setResults }) => {
  return (
    <li
      onClick={(e) => {
        setInput(el.title);
        setResults([]);
      }}
      className={s.searchResult}
    >
      {el.title}
    </li>
  );
};
