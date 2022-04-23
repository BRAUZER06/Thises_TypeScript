import { Actions, InitState, ModalTypes } from "../types/modalReducer";
const initState: InitState = {
  modalChecked: false,
  toggleRegisAuth: false,
};

export const modalReducer = (state = initState, action: Actions): InitState => {
  switch (action.type) {
    case ModalTypes.MODAL_CHECKED:
      return { ...state, modalChecked: action.payload };

    case ModalTypes.MODAL_CHECKED_REGIS_AUTHO:
      return { ...state, toggleRegisAuth: action.payload };

    default:
      return state;
  }
};
