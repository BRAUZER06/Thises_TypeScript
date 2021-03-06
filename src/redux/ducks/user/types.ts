export enum UserTypes {
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  FETCH_USER_LOADING = "FETCH_USER_LOADING",
  FETCH_USER_SUCCEES = "FETCH_USER_SUCCEES",
  EXITE_ACCOUNT_USER = "EXITE_ACCOUNT_USER",
}

type UserComments = {
  items?: any[];
  total?: number;
};
type UserPosts = {
  items?: any[];
  total?: number;
};

//Убрать ?, сделал для того что при авторизации он не получает все (fullname, data, token...) и появлялась ошибку
type UserInfo = {
  fullName?: string;
  username?: string;
  email?: string;
  password?: string;
  _id?: string;
  createdAt?: any;
  updatedAt?: any;
  __v?: number;
  token?: string;
  posts?: UserPosts;
  comments?: UserComments;
};

export interface InitState {
  error: null | string;
  loading: boolean;
  user: UserInfo;
}

interface UserExiteAccount {
  type: UserTypes.EXITE_ACCOUNT_USER;
}
interface UserError {
  type: UserTypes.FETCH_USER_ERROR;
  payload: null | string;
}
interface UserLoading {
  type: UserTypes.FETCH_USER_LOADING;
}
interface UserSuccees {
  type: UserTypes.FETCH_USER_SUCCEES;
  payload: UserInfo;
}

export type Actions = UserError | UserLoading | UserSuccees | UserExiteAccount;
