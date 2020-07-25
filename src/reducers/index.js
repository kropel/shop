import { combineReducers } from "redux";
import bagObj from "reducers/bag";
import productsObj from "reducers/product";

export const rootReducer = combineReducers({
  bagObj,
  productsObj,
});
