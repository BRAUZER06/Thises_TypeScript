import { instance } from "../../../config/instance";
import { CommentslTypes } from "./types";

const fetchCommentsLoadingAction = () => {
  return { type: CommentslTypes.FETCH_COMMENTS_LOADING };
};
const fetchCommentsErrorAction = (error: any) => {
  return { type: CommentslTypes.FETCH_COMMENTS_ERROR, payload: error };
};
const fetchCommentsSecceesAction = (obj: any) => {
  return { type: CommentslTypes.FETCH_COMMENTS_SECCEES, payload: obj };
};
const fetchAllPostCommentsSecceesAction = (obj: any) => {
  return { type: CommentslTypes.FETCH_ALL_POST_COMMENTS, payload: obj };
};

//получение всех комментарии (GET)
export const fetchAllCommentAction: any = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchCommentsLoadingAction());
      const respons = await instance.get("comments");
      dispatch(fetchCommentsSecceesAction(respons.data.items));
    } catch (error) {
      dispatch(fetchCommentsErrorAction("Не удалось получить комментарии"));
      console.log(error);
    }
  };
};

//получение всех комментарии одного поста (GET)
export const fetchAllCommentPostAction: any = (idPost: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchCommentsLoadingAction());
      const respons = await instance.get(`comments/post/${idPost}`);
      dispatch(fetchAllPostCommentsSecceesAction(respons.data));
    } catch (error) {
      dispatch(fetchCommentsErrorAction("Не удалось получить комментарии"));
      console.log(error);
    }
  };
};

//создание комментария (POST)
export const createCommentAction: any = (value: any, idPost: any) => {
  return async (dispatch: any) => {
    try {
      await instance.post("comments", {
        text: value,
        postId: idPost,
      });
      dispatch(fetchAllCommentPostAction(idPost));
      console.log(idPost);
    } catch (error) {
      dispatch(fetchCommentsErrorAction("Не удалось создать комментарий"));
      console.log(error);
    }
  };
};

//редактировать комментарий (PATCH)
export const redactCommentAction: any = (idComment: any, inputValue: any) => {
  return async (dispatch: any) => {
    try {
      await instance.patch(`comments/${idComment}`, {
        title: inputValue.title,
        text: inputValue.text,
      });
      dispatch(fetchAllCommentAction());
    } catch (error) {
      dispatch(
        fetchCommentsErrorAction("Ошибка при редактирвоании комментария ")
      );
      console.log(error);
    }
  };
};

//удаление комментария (DELETE)
export const deleteCommentAction: any = (idComment: any) => {
  return async (dispatch: any) => {
    try {
      await instance.delete(`comments/${idComment}`);
      dispatch(fetchAllCommentAction());
    } catch (error) {
      dispatch(fetchCommentsErrorAction("Ошибка при удалении комментария "));
      console.log(error);
    }
  };
};
