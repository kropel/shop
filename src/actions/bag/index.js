export const ACTION_TYPES = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  INCREMENT_AMOUNT: "INCREMENT_AMOUNT",
  DECREMENT_AMOUNT: "DECREMENT_AMOUNT",
  SET_AMOUNT: "SET_AMOUNT",
};

export const addProduct = (product) => ({
  type: ACTION_TYPES.ADD_PRODUCT,
  product,
});
export const removeProduct = (id) => ({
  type: ACTION_TYPES.REMOVE_PRODUCT,
  id,
});
export const incrementAmount = (id) => ({
  type: ACTION_TYPES.INCREMENT_AMOUNT,
  id,
});
export const decrentAmount = (id) => ({
  type: ACTION_TYPES.DECREMENT_AMOUNT,
  id,
});
export const setAmount = (id, amount) => ({
  type: ACTION_TYPES.SET_AMOUNT,
  id,
  amount,
});
