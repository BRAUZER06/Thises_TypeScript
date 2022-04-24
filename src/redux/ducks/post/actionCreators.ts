import { instance } from "../../../config/instance";
import { PostlTypes } from "./types";

const fetchPostsLoadingAction = () => {
  return { type: PostlTypes.FETCH_POST_LOADING };
};
const fetchPostsErrorAction = (error: any) => {
  return { type: PostlTypes.FETCH_POST_ERROR, payload: error };
};
const fetchPostsSecceesAction = (obj: any) => {
  return { type: PostlTypes.FETCH_POST_SECCEES, payload: obj };
};

//получение всех постов (GET)
export const fetchAllPostsAction: any = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchPostsLoadingAction());
      const respons = await instance.get("posts");
      dispatch(fetchPostsSecceesAction(respons.data.items));
      console.log(respons.data.items);
    } catch (error) {
      dispatch(fetchPostsErrorAction("Не удалось получить посты"));
      console.log(error);
    }
  };
};

//получение поста по id  (POST)
export const fetchOnePostsAction: any = (idPost: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchPostsLoadingAction());
      const respons = await instance.get(`posts/${idPost}`);
      dispatch(fetchPostsSecceesAction(respons.data));
    } catch (error) {
      dispatch(fetchPostsErrorAction("Не удалось получить пост"));
      console.log(error);
    }
  };
};

//создание поста (POST)
export const createPostAction: any = (valueInput: any) => {
  return async (dispatch: any) => {
    try {
      await instance.post("/posts", {
        title: valueInput.title,
        description: valueInput.description,
        photoUrl: valueInput.photoUrl,
        text: valueInput.text,
      });
      dispatch(fetchAllPostsAction());
    } catch (error) {
      dispatch(fetchPostsErrorAction("Не удалось создать пост"));
      console.log(error);
    }
  };
};

//редактировать пост (PATCH)
export const redactPostAction: any = (idPost: any, inputValue: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchPostsLoadingAction());
      await instance.patch(`posts/${idPost}`, {
        title: inputValue.title,
        text: inputValue.text,
      });
      dispatch(fetchAllPostsAction());
    } catch (error) {
      dispatch(fetchPostsErrorAction("Ошибка при редактирвоании поста "));
      console.log(error);
    }
  };
};

//удаление поста (DELETE)
export const deletedPostAction: any = (idPost: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchPostsLoadingAction());
      await instance.delete(`posts/${idPost}`);
      dispatch(fetchAllPostsAction());
    } catch (error) {
      dispatch(fetchPostsErrorAction("Ошибка при удалении поста "));
      console.log(error);
    }
  };
};

// ЗАГРУЖЕНИЕ ИЗОБРАЖЕНИЯ (СДЕЛАТЬ)
