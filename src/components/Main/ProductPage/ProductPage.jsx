import { useEffect, useState } from "react";
import { withRouter } from "../../../Hoc/withRouter";
import { Image } from "../../Common/Image/Image";
import s from "./ProductPage.module.css";

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
  console.log(productItem);
  const { price, name, img } = productItem;

  return (
    <div>
      <div className={s.product}>
        <div className={s.productInfo}>
          {/* <div className={s.title}>category: {category}</div> */}
          <div className={s.price}>price: {price}$</div>
          <div className={s.title}>{name}</div>
        </div>
        <div className={s.addButton}>
          <button onClick={() => props.onAdd(productItem)} className={s.btn}>
            add to cart
          </button>
        </div>
        <div className={s.image}>
          <Image img={img} name={name} />
        </div>
      </div>
      {/* <div>{description}</div> */}
    </div>
  );
};

export default withRouter(ProductItem);
