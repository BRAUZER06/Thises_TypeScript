export enum ModalTypes {
  MODAL_CHECKED = "MODAL_CHECKED",
  MODAL_CHECKED_REGIS_AUTHO = "MODAL_CHECKED_REGIS_AUTHO",
}

export interface InitState {
  modalChecked: boolean;
  toggleRegisAuth: boolean;
}

interface ModalChecked {
  type: ModalTypes.MODAL_CHECKED;
  payload: boolean;
}

interface ModalCheckedRegAuthAction {
  type: ModalTypes.MODAL_CHECKED_REGIS_AUTHO;
  payload: boolean;
}

export type Actions = ModalChecked | ModalCheckedRegAuthAction;
