const ADD_PRODUCT = "basket-reducer/ADD_PRODUCT";

let initialState = {
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        basketItems: action.items,
      };
    }
    default:
      return state;
  }
};

export const setBasketItems = (items) => {
  return {
    type: ADD_PRODUCT,
    items,
  };
};

export default basketReducer;
