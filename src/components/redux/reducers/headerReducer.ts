import {
  HEADER_INPUT_VALUE,
  HEADER_CLICK_TOGGLE_INPUT,
  HEADER_TOGGLE_MODAL_LOGIN,
} from "../actionsConstants";

interface InitState {
  toggleInput: boolean;
  inputValue: string | null;
  toggleModalLogin: boolean;
}

interface InputValueAction {
  type: "HEADER_INPUT_VALUE";
  payload: string;
}
interface ToggleInputAction {
  type: "HEADER_CLICK_TOGGLE_INPUT";
  payload: boolean;
}
interface ToggleModalAcrion {
  type: "HEADER_TOGGLE_MODAL_LOGIN";
  payload: boolean;
}
type Actions = InputValueAction | ToggleModalAcrion | ToggleInputAction;

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
