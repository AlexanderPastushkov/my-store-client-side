import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../../../redux/basket-selectors";
import { setBasketItems } from "../../../../redux/basket-reducer";

const reduxCart = ({ setBasketItems, basketItems }) => {
  return <div>reduxCart</div>;
};

let mapStateToProps = (state) => {
  return {
    basketItems: getItems(state),
  };
};
export default connect(mapStateToProps, { setBasketItems })(reduxCart);
