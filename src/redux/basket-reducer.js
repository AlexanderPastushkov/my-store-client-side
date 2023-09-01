const ADD_PRODUCT = "basket-reducer/ADD_PRODUCT";
const DELETE_PRODUCT = "basket-reducer/DELETE_PRODUCT";
const DECREASE_PRODUCT = "basket-reducer/DECREASE_PRODUCT";
const INCREASE_PRODUCT = "basket-reducer/INCREASE_PRODUCT";
const CHANGE_VALUE = "basket-reducer/CHANGE_VALUE";

let initialState = {
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        basketItems: state.basketItems.find((x) => x.id === action.product.id)
          ? state.basketItems.map((x) =>
              x.id === action.product.id
                ? {
                    ...x,
                    count: ++action.product.count,
                    priceTotal:
                      action.product.priceTotal + action.product.price,
                  }
                : x
            )
          : [...state.basketItems, action.product],
      };
    }
    case CHANGE_VALUE: {
      return {
        ...state,
        basketItems: state.basketItems.map((x) =>
          x.id === action.payload.id
            ? {
                ...x,
                count: action.payload.value,
                priceTotal: (action.payload.value * x.price).toFixed(2),
              }
            : x
        ),
      };
    }
    case DECREASE_PRODUCT: {
      return {
        ...state,
        basketItems: state.basketItems.map((x) =>
          x.id === action.product.id && x.count > 1
            ? {
                ...x,
                count: x.count - 1,
                priceTotal: ((x.count - 1) * x.price).toFixed(2),
              }
            : x
        ),
      };
    }
    case INCREASE_PRODUCT: {
      return {
        ...state,
        basketItems: state.basketItems.map((x) =>
          x.id === action.product.id && x.count < 10
            ? {
                ...x,
                count: x.count + 1,
                priceTotal: ((x.count + 1) * x.price).toFixed(2),
              }
            : x
        ),
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (x) => x.id !== action.product.id
        ),
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
export const deleteBasketItems = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};
export const decreaseBasketItems = (product) => {
  return {
    type: DECREASE_PRODUCT,
    product,
  };
};
export const changeValueOfBasketItems = (id, value) => {
  return {
    type: CHANGE_VALUE,
    payload: { id, value },
  };
};
export const increaseBasketItems = (product) => {
  return {
    type: INCREASE_PRODUCT,
    product,
  };
};
export const addProductToBasket = (product) => (dispatch) => {
  dispatch(setBasketItems(product));
};
export default basketReducer;
