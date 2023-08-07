import React, { useState, useEffect } from "react";
import s from "./SearchBar.module.css";
import { FaSearch, FaRegWindowClose } from "react-icons/fa";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDebounce } from "../../../Hooks/useDebounce";
import { getProducts } from "../../../redux/products-selectors";
import { productsAPI } from "../../../api/api";

const Search = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const debouncedWordEntered = useDebounce(wordEntered, 500);

  useEffect(() => {
    if (debouncedWordEntered) {
      productsAPI.getItems(debouncedWordEntered).then((data) => {
        setFilteredData(data);
      });
    } else {
      setFilteredData([]);
    }
  }, [debouncedWordEntered]);

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
          onChange={(e) => setWordEntered(e.target.value)}
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

let mapStateToProps = (state) => {
  return {
    products: getProducts(state),
  };
};

export default connect(mapStateToProps)(Search);
//========================================================================================================================================================
