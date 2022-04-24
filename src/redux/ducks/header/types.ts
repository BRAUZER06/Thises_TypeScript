export enum HeaderTypes {
  HEADER_INPUT_VALUE = "HEADER_INPUT_VALUE",
  HEADER_CLICK_CHECKED_INPUT = "HEADER_CLICK_CHECKED_INPUT",
  HEADER_CHECKED_MODAL_LOGIN = "HEADER_CHECKED_MODAL_LOGIN",
}

export interface InitState {
  checkedInput: boolean;
  inputValue: string | number;
  checkedModalLogin: boolean;
}

interface InputValueAction {
  type: HeaderTypes.HEADER_INPUT_VALUE;
  payload: string;
}
interface CheckedInputAction {
  type: HeaderTypes.HEADER_CLICK_CHECKED_INPUT;
  payload: boolean;
}
interface CheckedModalAcrion {
  type: HeaderTypes.HEADER_CHECKED_MODAL_LOGIN;
  payload: boolean;
}
export type Actions =
  | InputValueAction
  | CheckedModalAcrion
  | CheckedInputAction;
