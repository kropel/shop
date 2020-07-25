import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

import { rootReducer } from "reducers";
const looger = (store) => (next) => (action) => {
  console.log("DISPATCH", action);
  let resulet = next(action);
  console.log("next State", store.getState());
  return resulet;
};

export const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, looger)
);
