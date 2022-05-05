export enum CommentslTypes {
  FETCH_COMMENTS_LOADING = "FETCH_COMMENTS_LOADING",
  FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
  FETCH_COMMENTS_SECCEES = "FETCH_COMMENTS_SECCEES",
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

export type Actions = CommentsLoading | CommentsError | CommentsSeccees;
