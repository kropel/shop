export const ACTION_TYPES = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
};

export const fetchProducts = () => ({ type: ACTION_TYPES.FETCH_PRODUCTS });
export const fetchProductsSuccess = (products) => ({
  type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  products,
});
export const fetchProductsError = () => ({
  type: ACTION_TYPES.FETCH_PRODUCTS_ERROR,
});

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchProducts());
    const response = await fetch("https://d24huwa7xw9s1p.cloudfront.net");
    const products = await response.json();

    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    console.log(error.message);
    dispatch(fetchProductsError());
  }
};
