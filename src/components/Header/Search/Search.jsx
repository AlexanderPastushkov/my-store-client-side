import { useEffect, useState } from "react";
import { FaRegWindowClose, FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDebounce } from "../../../Hooks/useDebounce";
import {
  requestFilteredProducts,
  setProducts,
} from "../../../redux/products-reducer";
import { getProducts } from "../../../redux/products-selectors";

const Search = ({ products, requestFilteredProducts, setProducts }) => {
  const [wordEntered, setWordEntered] = useState("");

  const debouncedWordEntered = useDebounce(wordEntered, 500);
  useEffect(() => {
    if (debouncedWordEntered) {
      requestFilteredProducts(debouncedWordEntered);
    } else {
      setProducts([]);
    }
  }, [debouncedWordEntered]);

  const clearInput = () => {
    setProducts([]);
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
        {products.length === 0 ? (
          <FaSearch id="search-icon" className={s.searchIcon} />
        ) : (
          <FaRegWindowClose onClick={clearInput} className={s.clearBtn} />
        )}
        <div className={s.searchIcon}></div>
      </div>
      {products.length !== 0 && (
        <div className={s.resultsList}>
          {products.map((el) => (
            <NavLink
              className={s.searchResult}
              to={`/product/${el.id}`}
              key={el.id}
            >
              {el.name}
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
  requestFilteredProducts,
  setProducts,
})(Search);
//========================================================================================================================================================
