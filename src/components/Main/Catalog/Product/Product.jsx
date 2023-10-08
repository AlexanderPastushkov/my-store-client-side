import { NavLink } from "react-router-dom";
import { Image } from "../../../Common/Image/Image";
import s from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../../../redux/basket-reducer";
import { Rating } from "../../../Common/Rating/Rating";
import { Button } from "../../../StyledComponents/Button";

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
          <Button onClick={() => dispatch(addProductToBasket(product))}>
            add to cart
          </Button>
        </div>
      </div>
    </section>
  );
}
