import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./BrandBar.css";
import "../../../css/common.css";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../redux/products-selectors";
import { requestAllBrands } from "../../../redux/products-reducer";
import { CATALOG_ROUTE } from "../../../Utils/consts";

export const BrandBar = () => {
  const activeLink = ({ isActive }) => (isActive ? "active" : "item"); //isActive - atribute of Navlink
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestAllBrands());
  }, []);
  const brands = useSelector(getBrands);
  if (brands.length === 0) {
    return <div>LOADING...</div>;
  }
  return (
    <nav className="brand-nav">
      <ul className="brand-list">
        {brands.map((brand) => (
          <li key={brand.id}>
            <NavLink className={activeLink} to={CATALOG_ROUTE + brand.id}>
              {brand.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
