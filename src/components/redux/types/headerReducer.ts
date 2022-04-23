export interface InitState {
  toggleInput: boolean;
  inputValue: string | number;
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
export type Actions = InputValueAction | ToggleModalAcrion | ToggleInputAction;
