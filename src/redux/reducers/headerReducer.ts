import { Actions, InitState, HeaderTypes } from "../types/headerReducer";

const initState: InitState = {
  checkedInput: false,
  inputValue: "",
  checkedModalLogin: false,
};

export const headerReducer = (
  state = initState,
  action: Actions
): InitState => {
  switch (action.type) {
    case HeaderTypes.HEADER_INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case HeaderTypes.HEADER_CLICK_CHECKED_INPUT:
      return { ...state, checkedInput: action.payload };

    case HeaderTypes.HEADER_CHECKED_MODAL_LOGIN:
      return { ...state, checkedModalLogin: action.payload };

    default:
      return state;
  }
};
