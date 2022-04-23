import { Actions, InitState, HeaderTypes } from "../types/headerReducer";

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
    case HeaderTypes.HEADER_INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case HeaderTypes.HEADER_CLICK_TOGGLE_INPUT:
      return { ...state, toggleInput: action.payload };

    case HeaderTypes.HEADER_TOGGLE_MODAL_LOGIN:
      return { ...state, toggleModalLogin: action.payload };

    default:
      return state;
  }
};
