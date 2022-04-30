export enum PostlTypes {
  FETCH_ALL_POSTS_LOADING = "FETCH_POST_LOADING",
  FETCH_ALL_POSTS_ERROR = "FETCH_POST_ERROR",
  FETCH_ALL_POSTS_SECCEES = "FETCH_POST_SECCEES",

  FETCH_ONE_POST_LOADING = "FETCH_ONE_POST_LOADING",
  FETCH_ONE_POST_ERROR = "FETCH_ONE_POST_ERROR",
  FETCH_ONE_POST_SECCEES = "FETCH_ONE_POST_SECCEES",
}

interface PostsAllLoading {
  type: PostlTypes.FETCH_ALL_POSTS_LOADING;
}
interface PostsAllError {
  type: PostlTypes.FETCH_ALL_POSTS_ERROR;
  payload: string;
}
interface PostsAllSeccees {
  type: PostlTypes.FETCH_ALL_POSTS_SECCEES;
  payload: any;
}

interface PostOneLoading {
  type: PostlTypes.FETCH_ONE_POST_LOADING;
}
interface PostOneError {
  type: PostlTypes.FETCH_ONE_POST_ERROR;
  payload: string;
}
interface PostOneSeccees {
  type: PostlTypes.FETCH_ONE_POST_SECCEES;
  payload: any;
}

interface Post {
  createdAt?: string;
  description?: string;
  photoUrl?: string;
  text?: string;
  title?: string;
  updatedAt?: string;
  user?: {
    createdAt?: string;
    email?: string;
    fullName?: string;
    updatedAt?: string;
    __v?: 0;
    _id?: string;
  };
  views?: 0;
  __v?: 0;
  _id?: string;
}

export interface InitState {
  error: string | null;
  loading: boolean;
  posts: Post[];
  checkOnePost: {
    error: string | null;
    loading: boolean;
    post: Post;
  };
}

export type Actions =
  | PostsAllLoading
  | PostsAllError
  | PostsAllSeccees
  | PostOneLoading
  | PostOneError
  | PostOneSeccees;
