import { ACTION_TYPES, removeProduct } from "actions/bag";

export default (state = {}, action) => {
  let amount = 0;
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT:
      const { product } = action;
      if (state.hasOwnProperty(product.id)) {
        amount = state[product.id].amount + 1;
        return { ...state, [product.id]: { amount } };
      } else {
        return { ...state, [product.id]: { product, amount: 1 } };
      }

    case ACTION_TYPES.REMOVE_PRODUCT:
      delete state[action.id];
      return { ...state };

    case ACTION_TYPES.INCREMENT_AMOUNT:
      ({
        [action.id]: { amount },
      } = state);
      return { ...state, [action.id]: { amount: amount + 1 } };

    case ACTION_TYPES.DECREMENT_AMOUNT:
      ({
        [action.id]: { amount },
      } = state);
      if (amount > 1) {
        return { ...state, [action.id]: { amount: amount - 1 } };
      } else {
        return state;
      }
    case ACTION_TYPES.SET_AMOUNT:
      ({ amount } = action);
      if (amount > 0) {
        return { ...state, [action.id]: { amount } };
      } else {
        return { ...state, [action.id]: { amount: 0 } };
      }
    default:
      return state;
  }
};
