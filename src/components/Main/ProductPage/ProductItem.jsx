import { useEffect, useState } from "react";
import { withRouter } from "../../../Hoc/withRouter"; //also we can use hook useParams from react-router-dom
import { Image } from "../../Common/Image/Image";
import s from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket } from "../../../redux/basket-reducer";
import { Comments } from "./Comments/Comments";
import { CommentsForm } from "./Comments/CommentsForm";
import { takeComments } from "../../../toolkitRedux/commentsSliceSelectors";
import { setComments } from "../../../toolkitRedux/commentsSlice";
import { useParams } from "react-router-dom";
import { CommentsFormWithoutFormik } from "./Comments/CommentsFormWithoutFormik";

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
          <button
            onClick={() => dispatch(addProductToBasket(productItem))}
            className={s.btn}
          >
            add to cart
          </button>
        </div>
        <div className={s.image}>
          <Image img={img} name={name} />
        </div>
      </div>
      <>
        <div>
          <CommentsForm id={params.id} />
        </div>
        <div>{/* <Comments id={params.id} /> */}</div>
      </>
    </div>
  );
};

export default ProductItem;
