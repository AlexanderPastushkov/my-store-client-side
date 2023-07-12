import React, { useState } from "react";
import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("/api/all")
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((product) => {
          return (
            product &&
            product.name &&
            product.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log(results);
      });
  };

  return (
    <div className={s.inputWrarpper}>
      <FaSearch id="search-icon" className={s.searchIcon} />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className={s.inputSearch}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};
