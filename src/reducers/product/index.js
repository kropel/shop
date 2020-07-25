import { ACTION_TYPES } from "actions/products";

const initValue = {
  products: [],
  isLoading: true,
  isError: false,
};
const errorValue = {
  products: [],
  isLoading: false,
  isError: true,
};

export default (state = initValue, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS:
      return { ...state, ...initValue };
    case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.products,
      };
    case ACTION_TYPES.FETCH_PRODUCTS_ERROR:
      return { ...state, ...errorValue };
    default:
      return state;
  }
};
