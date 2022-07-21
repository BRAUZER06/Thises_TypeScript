export enum CommentslTypes {
  FETCH_COMMENTS_LOADING = "FETCH_COMMENTS_LOADING",
  FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
  FETCH_COMMENTS_SECCEES = "FETCH_COMMENTS_SECCEES",
  FETCH_ALL_POST_COMMENTS = "FETCH_ALL_POST_COMMENTS",
}

interface CommentAllPostComments {
  type: CommentslTypes.FETCH_ALL_POST_COMMENTS;
  payload: any;
}

interface CommentsLoading {
  type: CommentslTypes.FETCH_COMMENTS_LOADING;
}
interface CommentsError {
  type: CommentslTypes.FETCH_COMMENTS_ERROR;
  payload: string;
}
interface CommentsSeccees {
  type: CommentslTypes.FETCH_COMMENTS_SECCEES;
  payload: any;
}

interface Comments {
  _id: string;
  text: string;
  post: any;
  user: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface InitState {
  error: string | null;
  loading: boolean;
  comments: Comments[];
}

export type Actions =
  | CommentsLoading
  | CommentsError
  | CommentsSeccees
  | CommentAllPostComments;
