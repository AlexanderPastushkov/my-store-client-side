import React, { useState } from "react";
import s from "./SearchBar.module.css";
import { FaSearch, FaRegWindowClose } from "react-icons/fa";

import { NavLink } from "react-router-dom";

export const Search = ({
  filteredData,
  handleChange,
  setFilteredData,
  wordEntered,
  setWordEntered,
  setPlaceholder,
}) => {
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className={s.search}>
      <div className={s.inputWrarpper}>
        <input
          type="text"
          placeholder="enter to search..."
          onChange={(e) => handleChange(e.target.value)}
          className={s.inputSearch}
          value={wordEntered}
        />
        {filteredData.length === 0 ? (
          <FaSearch id="search-icon" className={s.searchIcon} />
        ) : (
          <FaRegWindowClose onClick={clearInput} className={s.clearBtn} />
        )}
        <div className={s.searchIcon}></div>
      </div>
      {filteredData.length !== 0 && (
        <div className={s.resultsList}>
          {filteredData.map((el) => (
            <NavLink
              className={s.searchResult}
              to={`/product/${el.id}`}
              key={el.id}
            >
              {el.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
