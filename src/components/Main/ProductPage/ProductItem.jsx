import { useEffect, useState } from "react";
import { withRouter } from "../../../Hoc/withRouter"; //also we can use hook useParams from react-router-dom
import { Image } from "../../Common/Image/Image";
import s from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../../redux/basket-reducer";
import { Comments } from "./Comments/Comments";
import { CommentsForm } from "./Comments/CommentsForm";

const ProductItem = (props) => {
  const [productItem, setProductItem] = useState({});
  useEffect(() => {
    refreshProduct();
  }, [props.match.params.id]);

  const refreshProduct = () => {
    let id = props.match.params.id; //wrap in withRouter
    const fetchData = async () => {
      const response = await fetch(`/api/product/${id}`);
      const json = await response.json();

      setProductItem(json);
    };
    fetchData();
  };
  const dispatch = useDispatch();
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
      <div>
        <div>
          <Comments />
        </div>
        <div>
          <CommentsForm />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductItem);
