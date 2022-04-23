import { ModalTypes } from "../types/modalReducer";

export const modalCheckedAction = (checked: boolean) => {
  return { type: ModalTypes.MODAL_CHECKED, payload: checked };
};

export const modalCheckedRegistAuthAction = (checked: boolean) => {
  return { type: ModalTypes.MODAL_CHECKED_REGIS_AUTHO, payload: checked };
};

export const modalInputValueActions = (value: string, name: string) => {
  return {
    type: ModalTypes.MODAL_INPUT_VALUE,
    payload: {
      value,
      name,
    },
  };
};
