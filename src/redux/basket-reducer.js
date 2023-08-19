const ADD_PRODUCT = "basket-reducer/ADD_PRODUCT";

let initialState = {
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        basketItems: action.item,
      };
    }
    default:
      return state;
  }
};

export const setBasketItem = (item) => {
  return {
    type: ADD_PRODUCT,
    item,
  };
};

export default basketReducer;
