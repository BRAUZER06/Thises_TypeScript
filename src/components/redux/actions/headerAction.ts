import {
  INPUT_VALUE,
  CLICK_TOGGLE_INPUT,
  TOGGLE_MODAL_LOGIN,
} from "../actionsConstants";

export const headerInputValueAction = (value: any) => {
  return { type: INPUT_VALUE, payload: value };
};

export const headerToggleInputAction = (checked: any) => {
  return { type: CLICK_TOGGLE_INPUT, payload: checked };
};

export const headerToggleLoginAction = (checked: any) => {
  return { type: INPUT_VALUE, payload: checked };
};
