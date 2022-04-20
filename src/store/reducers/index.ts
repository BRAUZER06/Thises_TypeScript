import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";

export const rootReducer = combineReducers({
  header: headerReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
