interface InputValue {
  fullName: string;
  email: string;
  password: string;
  //что-то кажлется что это не будет работать
  name?: any;
  value?: any;
}

export enum ModalTypes {
  MODAL_CHECKED = "MODAL_CHECKED",
  MODAL_INPUT_VALUE = "MODAL_INPUT_VALUE",
  MODAL_CHECKED_REGIS_AUTHO = "MODAL_CHECKED_REGIS_AUTHO",
}

export interface InitState {
  modalChecked: boolean;
  toggleRegisAuth: boolean;
  inputValue: InputValue;
}

interface ModalChecked {
  type: ModalTypes.MODAL_CHECKED;
  payload: boolean;
}
interface ModalInputValueAction {
  type: ModalTypes.MODAL_INPUT_VALUE;
  payload: InputValue;
}
interface ModalCheckedRegAuthAction {
  type: ModalTypes.MODAL_CHECKED_REGIS_AUTHO;
  payload: boolean;
}

export type Actions =
  | ModalChecked
  | ModalInputValueAction
  | ModalCheckedRegAuthAction;
