import { combineReducers } from "redux";
import bagObj from "./bag";
import productsObj from "./product";
import showShoppingBag from "./showShoppingBad";

export const rootReducer = combineReducers({
  bagObj,
  showShoppingBag,
  productsObj,
});
