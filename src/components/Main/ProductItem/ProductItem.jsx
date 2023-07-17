import React, { useEffect, useState } from "react";
import { withRouter } from "../../../hoc/withRouter";
import s from "./ProductItem.module.css";

const ProductItem = (props) => {
  const [productItem, setProductItem] = useState({});
  useEffect(() => {
    refreshProduct();
  }, [props.match.params.id]);

  const refreshProduct = () => {
    let id = props.match.params.id; //wrap in withRouter
    const fetchData = async () => {
      const response = await fetch(`/api/all/el?id=${id}`);
      const json = await response.json();
      setProductItem(json.data);
    };
    fetchData();
  };

  const { category, price, title, image, description } = productItem;
  return (
    <div>
      <div className={s.product}>
        <div className={s.productInfo}>
          <div className={s.title}>category: {category}</div>
          <div className={s.price}>price: {price}$</div>
          <div className={s.title}>{title}</div>
        </div>
        <div className={s.addButton}>
          <button onClick={() => props.onAdd(productItem)} className={s.btn}>
            add to cart
          </button>
        </div>
        <div className={s.image}>
          <img className={s.img} src={image} alt={title} />
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default withRouter(ProductItem);
