export enum PostlTypes {
  FETCH_POST_LOADING = "FETCH_POST_LOADING",
  FETCH_POST_ERROR = "FETCH_POST_ERROR",
  FETCH_POST_SECCEES = "FETCH_POST_SECCEES",
}

interface PostLoading {
  type: PostlTypes.FETCH_POST_LOADING;
}
interface PostError {
  type: PostlTypes.FETCH_POST_ERROR;
  payload: string;
}
interface PostSeccees {
  type: PostlTypes.FETCH_POST_SECCEES;
  payload:any
}

interface Post {
  _id?: string;
  title?: string;
  text?: string;
  views?: number;
  user?: {
    _id?: string;
    fullName?: string;
    email?: string;
    password?: string;
    createdAt?: any;
    updatedAt?: any;
    __v?: number;
  };
  createdAt?: any;
  updatedAt?: any;
  __v?: number;
}

export interface InitState {
  error: string | null;
  loading: boolean;
  posts: Post;
}

export type Actions = PostLoading | PostError | PostSeccees;
