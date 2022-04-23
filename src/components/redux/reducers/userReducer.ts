import { Actions, ModalTypes } from "../types/modalReducer";

type UserInfo = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  _id: string;
  createdAt: any;
  updatedAt: any;
  __v: number;
  token: string;
};

interface InitState {
  error: null | string;
  loading: boolean;
  user: UserInfo;
}

const initState: InitState = {
  error: null,
  loading: false,
  user: {
    fullName: '',
    username: '',
    email: '',
    password: '',
    _id: '',
    createdAt: "",
    updatedAt: "",
    __v: 0,
    token: '',
  },
};

export const modalReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "USER_INPUT_VALUE":
      //что-то кажлется что это не будет работать
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
