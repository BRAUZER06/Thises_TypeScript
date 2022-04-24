import { UserInfo } from "./user";

export interface Post {
  _id: string;
  title: string;
  text: string;
  slug: string;
  description: string;
  views: number;
  user: UserInfo;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Comment {
  _id: string;
  text: string;
  post: Post;
  user: UserInfo;
  createdAt: string;
  updatedAt: string;
  __v: number;
}