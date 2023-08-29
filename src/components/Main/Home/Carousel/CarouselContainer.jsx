import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestAllProducts,
  setCarouselProducts,
} from "../../../../redux/products-reducer";
import { getCarouselProducts } from "../../../../redux/products-selectors";
import Carousel from "./Carousel";
import { productsAPI } from "../../../../api/api";

export const CarouselContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // productsAPI
    //   .getAllItems()
    //   .then((data) => dispatch(setCarouselProducts(data.rows)));
    dispatch(requestAllProducts());
  }, []);
  const products = useSelector(getCarouselProducts);

  if (products.length === 0) {
    return <div>LOADING...</div>;
  }
  return <Carousel products={products} />;
};
