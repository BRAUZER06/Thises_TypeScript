import {
  INPUT_VALUE,
  CLICK_TOGGLE_INPUT,
  TOGGLE_MODAL_LOGIN,
} from "../actionsConstants";


interface InitState {
  toggleInput: boolean;
  inputValue: string | null;
  toggleModalLogin: boolean;
}

interface InputValue {
  type:"INPUT_VALUE";
  payload:string
}


const initState: InitState = {
  toggleInput: false,
  inputValue: "",
  toggleModalLogin: false,
};

export const headerReducer = (state = initState, action: any): InitState => {
  switch (action.type) {
    case CLICK_TOGGLE_INPUT:
      return { ...state, toggleInput: action.payload };

    case INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case TOGGLE_MODAL_LOGIN:
      return { ...state, toggleModalLogin: action.payload };

    default:
      return state;
  }
};
