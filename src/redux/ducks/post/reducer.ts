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
  checkOnePost: {
    error: null,
    loading: false,
    post: {
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
  },
};

export const postlReducer = (state = initState, action: Actions): InitState => {
  switch (action.type) {
    case PostlTypes.FETCH_ALL_POSTS_LOADING:
      return { ...state, error: null, loading: true };

    case PostlTypes.FETCH_ALL_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case PostlTypes.FETCH_ALL_POSTS_SECCEES:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };

    case PostlTypes.FETCH_ONE_POST_LOADING:
      return {
        ...state,
        checkOnePost: {
          ...state.checkOnePost,
          loading: true,
          error: null,
        },
      };

    case PostlTypes.FETCH_ONE_POST_ERROR:
      return {
        ...state,
        checkOnePost: {
          ...state.checkOnePost,
          loading: false,
          error: action.payload,
        },
      };

    case PostlTypes.FETCH_ONE_POST_SECCEES:
      return {
        ...state,
        checkOnePost: {
          ...state.checkOnePost,
          loading: false,
          error: null,
          post: action.payload,
        },
      };
    default:
      return state;
  }
};
