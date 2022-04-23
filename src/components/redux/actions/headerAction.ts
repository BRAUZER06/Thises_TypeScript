import { HeaderTypes } from "../types/headerReducer";

export const headerInputValueAction = (value: string | null) => {
  return { type: HeaderTypes.HEADER_INPUT_VALUE, payload: value };
};

export const headerToggleInputAction = (checked: boolean) => {
  return { type: HeaderTypes.HEADER_CLICK_TOGGLE_INPUT, payload: checked };
};

export const headerToggleLoginAction = (checked: boolean) => {
  return { type: HeaderTypes.HEADER_TOGGLE_MODAL_LOGIN, payload: checked };
};
