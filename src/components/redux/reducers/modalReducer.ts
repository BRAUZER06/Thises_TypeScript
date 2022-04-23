
import { Actions, InitState, ModalTypes } from "../types/modalReducer";
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
    case ModalTypes.MODAL_CHECKED:
      return { ...state, modalChecked: action.payload };

    case ModalTypes.MODAL_CHECKED_REGIS_AUTHO:
      return { ...state, toggleRegisAuth: action.payload };

    case ModalTypes.MODAL_INPUT_VALUE:
      //что-то кажлется что это не будет работать
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
