//HEADER ACTIONS
export const HEADER_INPUT_VALUE = "HEADER_INPUT_VALUE";
export const HEADER_CLICK_TOGGLE_INPUT = "HEADER_CLICK_TOGGLE_INPUT";
export const HEADER_TOGGLE_MODAL_LOGIN = "HEADER_TOGGLE_MODAL_LOGIN";

export enum HeaderTypes {
  HEADER_INPUT_VALUE = "HEADER_INPUT_VALUE",
  HEADER_CLICK_TOGGLE_INPUT = "HEADER_CLICK_TOGGLE_INPUT",
  HEADER_TOGGLE_MODAL_LOGIN = "HEADER_TOGGLE_MODAL_LOGIN",
}

export interface InitState {
  toggleInput: boolean;
  inputValue: string | number;
  toggleModalLogin: boolean;
}

interface InputValueAction {
  type: HeaderTypes.HEADER_INPUT_VALUE;
  payload: string;
}
interface ToggleInputAction {
  type: HeaderTypes.HEADER_CLICK_TOGGLE_INPUT;
  payload: boolean;
}
interface ToggleModalAcrion {
  type: HeaderTypes.HEADER_TOGGLE_MODAL_LOGIN;
  payload: boolean;
}
export type Actions = InputValueAction | ToggleModalAcrion | ToggleInputAction;
