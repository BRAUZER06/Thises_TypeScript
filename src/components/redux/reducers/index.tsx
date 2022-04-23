import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
});
