import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

import { rootReducer } from "reducers";

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
