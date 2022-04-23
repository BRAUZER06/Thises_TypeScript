import {
  MODAL_CHECKED,
  MODAL_INPUT_VALUE,
  MODAL_CHECKED_REGIS_AUTHO,
} from "../actionsConstants";

interface InputValue {
  fullName: string;
  email: string;
  password: string;
  //что-то кажлется что это не будет работать
  name?: any;
  value?: any;
}

interface InitState {
  modalChecked: boolean;
  toggleRegisAuth: boolean;
  inputValue: InputValue;
}

interface ModalChecked {
  type: "MODAL_CHECKED";
  payload: boolean;
}
interface ModalInputValueAction {
  type: "MODAL_INPUT_VALUE";
  payload: InputValue;
}
interface ModalCheckedRegAuthAction {
  type: "MODAL_CHECKED_REGIS_AUTHO";
  payload: boolean;
}

const initState: InitState = {
  modalChecked: false,
  toggleRegisAuth: false,
  inputValue: {
    fullName: "",
    email: "",
    password: "",
  },
};

type Actions = ModalChecked | ModalInputValueAction | ModalCheckedRegAuthAction;

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
