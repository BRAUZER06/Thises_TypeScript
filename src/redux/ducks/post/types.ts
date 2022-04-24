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
  payload: any;
}

interface Post {
  createdAt?: string;
  description?: string;
  photoUrl?: string;
  text?: string;
  title?: string;
  updatedAt?: string;
  user: {
    createdAt?: string;
    email?: string;
    fullName?: string;
    updatedAt?: string;
    __v: 0;
    _id?: string;
  };
  views: 0;
  __v: 0;
  _id?: string;
}

export interface InitState {
  error: string | null;
  loading: boolean;
  posts: any;
}

export type Actions = PostLoading | PostError | PostSeccees;
