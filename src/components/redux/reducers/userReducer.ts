import { Actions, InitState, UserTypes } from "../types/userReducer";

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
    comments: {},
    posts: {},
  },
};

export const userReducer = (state = initState, action: Actions) => {
  switch (action.type) {
    case UserTypes.FETCH_USER_SUCCEES:
      //что-то кажлется что это не будет работать
      return {
        ...state,
        error: null,
        loading: false,
        user: action.payload,
      };

    case UserTypes.FETCH_USER_ERROR:
      return { ...state, error: action.payload, loading: false };

    case UserTypes.FETCH_USER_LOADING:
      return { ...state, error: null, loading: true };

    case UserTypes.EXITE_ACCOUNT_USER:
      return { ...state, user: {} };

    default:
      return state;
  }
};
