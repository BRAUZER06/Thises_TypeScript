import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { modalReducer } from "./modalReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  modal: modalReducer,
  userReducer: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
