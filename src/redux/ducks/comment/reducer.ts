import { Actions, InitState, CommentslTypes } from "./types";

const initState: InitState = {
  error: null,
  loading: false,
  comments: [
    {
      _id: "",
      text: "",
      post: "",
      user: "",
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
  ],
};

export const commentReducer = (
  state = initState,
  action: Actions
): InitState => {
  switch (action.type) {
    case CommentslTypes.FETCH_COMMENTS_LOADING:
      return { ...state, error: null, loading: true };

    case CommentslTypes.FETCH_COMMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case CommentslTypes.FETCH_COMMENTS_SECCEES:
      return {
        ...state,
        loading: false,
        error: null,
        comments: action.payload,
      };
    case CommentslTypes.FETCH_ALL_POST_COMMENTS:
      return {
        ...state,
        loading: false,
        error: null,
        comments: action.payload,
      };
    default:
      return state;
  }
};
