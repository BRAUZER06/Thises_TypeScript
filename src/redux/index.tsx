import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import { headerReducer } from "./ducks/header/reducer";
import { modalReducer } from "./ducks/modal/reducer";
import { userReducer } from "./ducks/user/reducer";
import { postlReducer } from "./ducks/post/reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
  userReducer: userReducer,
  postReducer:postlReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
