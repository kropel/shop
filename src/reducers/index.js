import { combineReducers } from "redux";
import bag from "reducers/bag";
import products from "reducers/product";

export const rootReducer = combineReducers({
  bag,
  products,
});
