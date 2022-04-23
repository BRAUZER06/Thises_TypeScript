import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
