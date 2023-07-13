import React, { useEffect, useState } from "react";
import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults, input, setInput }) => {
  const fetchData = (value) => {
    fetch("/api/all")
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((product) => {
          return (
            value &&
            product &&
            product &&
            product.title &&
            product.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  // const deactivateResultList = (value) => {
  //   setInput(value);
  //   setResults([]);
  // };

  return (
    <div className={s.inputWrarpper}>
      <FaSearch id="search-icon" className={s.searchIcon} />
      <input
        // onBlur={(e) => deactivateResultList(e.target.value)}
        onChange={(e) => handleChange(e.target.value)}
        value={input}
        className={s.inputSearch}
        placeholder="Type to search..."
      />
    </div>
  );
};
