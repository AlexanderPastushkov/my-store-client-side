import { ProductsType } from "../Types/types.js";

const ADD_PRODUCT = "basket-reducer/ADD_PRODUCT";
const DELETE_PRODUCT = "basket-reducer/DELETE_PRODUCT";
const DECREASE_PRODUCT = "basket-reducer/DECREASE_PRODUCT";
const INCREASE_PRODUCT = "basket-reducer/INCREASE_PRODUCT";
const CHANGE_VALUE = "basket-reducer/CHANGE_VALUE";

let initialState: InitialStateType = {
  basketItems: [],
};

type InitialStateType = {
  basketItems: Array<ProductsType>;
};

const basketReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
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
                priceTotal: +((action.product.count + 1) * x.price).toFixed(2),
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

type ActionsTypes =
  | SetBasketItemsType
  | DeleteBasketItemsType
  | DecreaseBasketItemsType
  | ChangeValueOfBasketItemsType
  | IncreaseBasketItemsType;

type SetBasketItemsType = {
  type: typeof ADD_PRODUCT;
  product: ProductsType;
};
export const setBasketItems = (product: ProductsType): SetBasketItemsType => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

type DeleteBasketItemsType = {
  type: typeof DELETE_PRODUCT;
  product: any;
};
export const deleteBasketItems = (
  product: ProductsType
): DeleteBasketItemsType => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

type DecreaseBasketItemsType = {
  type: typeof DECREASE_PRODUCT;
  product: any;
};
export const decreaseBasketItems = (
  product: ProductsType
): DecreaseBasketItemsType => {
  return {
    type: DECREASE_PRODUCT,
    product,
  };
};

type ChangeValuePayloadBasketItemsType = {
  id: number;
  value: number;
};
type ChangeValueOfBasketItemsType = {
  type: typeof CHANGE_VALUE;
  payload: ChangeValuePayloadBasketItemsType;
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
  product: ProductsType;
};
export const increaseBasketItems = (
  product: ProductsType
): IncreaseBasketItemsType => {
  return {
    type: INCREASE_PRODUCT,
    product,
  };
};
export const addProductToBasket =
  (product: ProductsType) => (dispatch: any) => {
    dispatch(setBasketItems(product));
  };
export default basketReducer;
