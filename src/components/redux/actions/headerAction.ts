import {
  HEADER_INPUT_VALUE,
  HEADER_CLICK_TOGGLE_INPUT,
  HEADER_TOGGLE_MODAL_LOGIN,
} from "../actionsConstants";

export const headerInputValueAction = (value: string|null) => {
  return { type: HEADER_INPUT_VALUE, payload: value };
};

export const headerToggleInputAction = (checked: boolean) => {
  return { type: HEADER_CLICK_TOGGLE_INPUT, payload: checked };
};

export const headerToggleLoginAction = (checked: boolean) => {
  return { type: HEADER_TOGGLE_MODAL_LOGIN, payload: checked };
};
