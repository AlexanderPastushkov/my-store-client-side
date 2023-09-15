const ADD_PRODUCT: string = "basket-reducer/ADD_PRODUCT";
const DELETE_PRODUCT: string = "basket-reducer/DELETE_PRODUCT";
const DECREASE_PRODUCT: string = "basket-reducer/DECREASE_PRODUCT";
const INCREASE_PRODUCT: string = "basket-reducer/INCREASE_PRODUCT";
const CHANGE_VALUE: string = "basket-reducer/CHANGE_VALUE";

let initialState: InitialStateType = {
  basketItems: [],
};
type BasketItemsType = {
  id: number;
  name: string;
  price: number;
  count: number;
  priceTotal: number;
  brandId: number;
  typeId: number;
  info: Array<string>;
};
type InitialStateType = {
  basketItems: Array<BasketItemsType>;
};

const basketReducer = (state = initialState, action: any): InitialStateType => {
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
                    priceTotal: action.product.count * action.product.price,
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
                priceTotal: +(action.payload.value * x.price).toFixed(2),
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
                count: action.product.count - 1,
                priceTotal: +(
                  (action.product.count - 1) *
                  action.product.price
                ).toFixed(2),
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
                ...action.product,
                count: action.product.count + 1,
                priceTotal: ((action.product.count + 1) * x.price).toFixed(2),
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

type SetBasketItemsType = {
  type: typeof ADD_PRODUCT;
  product: any;
};
export const setBasketItems = (product: any): SetBasketItemsType => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

type DeleteBasketItemsType = {
  type: typeof DELETE_PRODUCT;
  product: any;
};
export const deleteBasketItems = (product: any): DeleteBasketItemsType => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

type DecreaseBasketItemsType = {
  type: typeof DECREASE_PRODUCT;
  product: any;
};
export const decreaseBasketItems = (product: any): DecreaseBasketItemsType => {
  return {
    type: DECREASE_PRODUCT,
    product,
  };
};

type ChangeValueOfBasketItemsType = {
  type: typeof DECREASE_PRODUCT;
  payload: { id: number; value: number };
};
export const changeValueOfBasketItems = (
  id: number,
  value: number
): ChangeValueOfBasketItemsType => {
  return {
    type: CHANGE_VALUE,
    payload: { id, value },
  };
};

type IncreaseBasketItemsType = {
  type: typeof INCREASE_PRODUCT;
  product: any;
};
export const increaseBasketItems = (product: any): IncreaseBasketItemsType => {
  return {
    type: INCREASE_PRODUCT,
    product,
  };
};
export const addProductToBasket = (product: any) => (dispatch: any) => {
  dispatch(setBasketItems(product));
};
export default basketReducer;
