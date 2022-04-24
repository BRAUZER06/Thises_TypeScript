import { Actions, InitState, PostlTypes } from "./types";

const initState: InitState = {
  error: null,
  loading: false,
  posts: [
    {
      createdAt: "",
      description: "",
      photoUrl: "",
      text: "",
      title: "",
      updatedAt: "",
      user: {
        createdAt: "",
        email: "",
        fullName: "",
        updatedAt: "",
        __v: 0,
        _id: "",
      },
      views: 0,
      __v: 0,
      _id: "",
    },
  ],
};

export const postlReducer = (state = initState, action: Actions): InitState => {
  switch (action.type) {
    case PostlTypes.FETCH_POST_LOADING:
      return { ...state, error: null, loading: true };

    case PostlTypes.FETCH_POST_ERROR:
      return { ...state, loading: false, error: action.payload };

    //он тут получает и объекты и массив
    case PostlTypes.FETCH_POST_SECCEES:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    default:
      return state;
  }
};
