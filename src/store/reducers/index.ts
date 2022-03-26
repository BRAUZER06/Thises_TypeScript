import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { userReducer } from "./userReducer";
import { headerReducer } from "./headerReducer";

export const rootReducer = combineReducers({
  // user: userReducer,
  // modal: modalReducer,
  header: headerReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
