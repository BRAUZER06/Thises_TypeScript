 interface InputValue {
  fullName: string;
  email: string;
  password: string;
  //что-то кажлется что это не будет работать
  name?: any;
  value?: any;
}

export interface InitState {
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

export type Actions = ModalChecked | ModalInputValueAction | ModalCheckedRegAuthAction;
