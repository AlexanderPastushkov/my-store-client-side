import { NavLink } from "react-router-dom";
import { Image } from "../../../Common/Image/Image";
import s from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../../../redux/basket-reducer";

export default function Product({ product, onAdd }) {
  const { img, name, priceTotal, price, id, count } = product;
  const dispatch = useDispatch();

  return (
    <section>
      <div className={s.product}>
        <NavLink className={s.title} to={`/product/${id}`}>
          {name}
        </NavLink>
        <div className={s.image}>
          <Image img={img} name={name} />
        </div>

        <div className={s.price}>$ {price}</div>
        <div className={s.addbutton}>
          <button
            onClick={() => dispatch(addProductToBasket(product))}
            className={s.btn}
          >
            add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
