import { ModalTypes } from "./types";

export const modalCheckedAction = (checked: boolean) => {
  return { type: ModalTypes.MODAL_CHECKED, payload: checked };
};

export const modalCheckedRegistAuthAction = (checked: boolean) => {
  return { type: ModalTypes.MODAL_CHECKED_REGIS_AUTHO, payload: checked };
};


