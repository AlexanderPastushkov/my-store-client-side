import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToBasket } from "../../../redux/basket-reducer";
import { Image } from "../../Common/Image/Image";
import { CommentsForm } from "./Comments/CommentsForm";
import s from "./ProductItem.module.css";
import { Button } from "../../StyledComponents/Button";

const ProductItem = () => {
  const [productItem, setProductItem] = useState({});
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    refreshProduct();
  }, [params.id]);

  const refreshProduct = () => {
    const fetchData = async (id) => {
      const response = await fetch(`/api/product/${id}`);
      const json = await response.json();

      setProductItem(json);
    };
    fetchData(params.id);
  };

  const { price, name, img } = productItem;

  return (
    <div>
      <div className={s.product}>
        <div className={s.productInfo}>
          <div className={s.price}>price: {price}$</div>
          <div className={s.title}>{name}</div>
        </div>
        <div className={s.addButton}>
          <Button onClick={() => dispatch(addProductToBasket(productItem))}>
            add to cart
          </Button>
        </div>
        <div className={s.image}>
          <Image img={img} name={name} />
        </div>
      </div>
      <>
        <div>
          <CommentsForm id={params.id} />
        </div>
      </>
    </div>
  );
};

export default ProductItem;
