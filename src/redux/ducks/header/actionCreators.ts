import { HeaderTypes } from "./types";

export const headerInputValueAction = (value: string | null) => {
  return { type: HeaderTypes.HEADER_INPUT_VALUE, payload: value };
};

export const headerCheckedInputAction = (checked: boolean) => {
  return { type: HeaderTypes.HEADER_CLICK_CHECKED_INPUT, payload: checked };
};

export const headerCheckedLoginAction = (checked: boolean) => {
  return { type: HeaderTypes.HEADER_CHECKED_MODAL_LOGIN, payload: checked };
};
