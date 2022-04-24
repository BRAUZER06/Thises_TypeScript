import { Actions, InitState, PostlTypes } from "./types";

const initState: InitState = {
  error: null,
  loading: false,
  posts: {
    _id: "",
    title: "",
    text: "",
    views: 0,
    user: {
      _id: "",
      fullName: "",
      email: "",
      password: "",
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
};

export const modalReducer = (state = initState, action: Actions): InitState => {
  switch (action.type) {
    case PostlTypes.FETCH_POST_LOADING:
      return { ...state, error: null, loading: true };

    case PostlTypes.FETCH_POST_ERROR:
      return { ...state, loading: false, error: action.payload };

      //он тут получает и объекты и массив
    case PostlTypes.FETCH_POST_SECCEES:
      return { ...state, posts: action.payload };
  }
};
