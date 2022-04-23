import {
  MODAL_CHECKED,
  MODAL_INPUT_VALUE,
  MODAL_CHECKED_REGIS_AUTHO,
} from "../actionsConstants";

import { Actions, InitState } from "../types/modalReducer";
const initState: InitState = {
  modalChecked: false,
  toggleRegisAuth: false,
  inputValue: {
    fullName: "",
    email: "",
    password: "",
  },
};

export const modalReducer = (state = initState, action: Actions): InitState => {
  switch (action.type) {
    case MODAL_CHECKED:
      return { ...state, modalChecked: action.payload };

    case MODAL_CHECKED_REGIS_AUTHO:
      return { ...state, toggleRegisAuth: action.payload };

    case MODAL_INPUT_VALUE:
      //что-то кажлется что это не будет работать
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
