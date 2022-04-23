import {
  HEADER_INPUT_VALUE,
  HEADER_CLICK_TOGGLE_INPUT,
  HEADER_TOGGLE_MODAL_LOGIN,
} from "../actionsConstants";
import { Actions, InitState } from "../types/headerReducer";

const initState: InitState = {
  toggleInput: false,
  inputValue: "",
  toggleModalLogin: false,
};

export const headerReducer = (
  state = initState,
  action: Actions
): InitState => {
  switch (action.type) {
    case HEADER_INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case HEADER_CLICK_TOGGLE_INPUT:
      return { ...state, toggleInput: action.payload };

    case HEADER_TOGGLE_MODAL_LOGIN:
      return { ...state, toggleModalLogin: action.payload };

    default:
      return state;
  }
};
