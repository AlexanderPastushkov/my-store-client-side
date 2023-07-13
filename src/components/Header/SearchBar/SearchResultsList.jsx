import React from "react";
import s from "./SearchBar.module.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ setResults, results, setInput, input }) => {
  return (
    <ul className={s.resultsList}>
      {results.map((el) => (
        <SearchResult
          setResults={setResults}
          setInput={setInput}
          el={el}
          key={el.id}
        />
      ))}
    </ul>
  );
};
