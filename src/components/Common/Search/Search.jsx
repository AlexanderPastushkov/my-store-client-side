import { useEffect, useState } from "react";
import { FaRegWindowClose, FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDebounce } from "../../../Hooks/useDebounce";
import { requestProducts } from "../../../redux/products-reducer";
import { getProducts } from "../../../redux/products-selectors";

const Search = ({ products, requestProducts }) => {
  const [wordEntered, setWordEntered] = useState("");

  const debouncedWordEntered = useDebounce(wordEntered, 500);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (debouncedWordEntered) {
      requestProducts(debouncedWordEntered);
      setFilteredData(products);
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

export default connect(mapStateToProps, {
  requestProducts: requestProducts,
})(Search);
//========================================================================================================================================================
