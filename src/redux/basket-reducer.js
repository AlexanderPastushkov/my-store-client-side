const ADD_PRODUCT = "basket-reducer/ADD_PRODUCT";

let initialState = {
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        basketItems: action.product,
      };
    }
    default:
      return state;
  }
};

export const setBasketItems = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export default basketReducer;
