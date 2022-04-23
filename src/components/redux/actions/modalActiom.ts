import {
  MODAL_CHECKED,
  MODAL_INPUT_VALUE,
  MODAL_CHECKED_REGIS_AUTHO,
} from "../actionsConstants";

export const modalCheckedAction = (checked: boolean) => {
  return { type: MODAL_CHECKED, payload: checked };
};

export const modalCheckedRegistAuthAction = (checked: boolean) => {
  return { type: MODAL_CHECKED_REGIS_AUTHO, payload: checked };
};

export const modalInputValueActions = (value: string, name: string) => {
  return {
    type: MODAL_INPUT_VALUE,
    payload: {
      value,
      name,
    },
  };
};
