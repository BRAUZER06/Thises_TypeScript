import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import { headerReducer } from "./ducks/header/reducer";
import { modalReducer } from "./ducks/modal/reducer";
import { userReducer } from "./ducks/user/reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
  userReducer: userReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
