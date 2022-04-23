import { Actions, InitState } from "../types/userReducer";

const initState: InitState = {
  error: null,
  loading: false,
  user: {
    fullName: "",
    username: "",
    email: "",
    password: "",
    _id: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
    token: "",
  },
};

export const userReducer = (state = initState, action: Actions) => {
  switch (action.type) {
    case "FETCH_USER_SUCCEES":
      //что-то кажлется что это не будет работать
      return {
        ...state,
        error: null,
        loading: false,
        user: action.payload,
      };

    case "FETCH_USER_ERROR":
      return { ...state, error: action.payload, loading: false };

    case "FETCH_USER_LOADING":
      return { ...state, error: null, loading: true };

    default:
      return state;
  }
};
