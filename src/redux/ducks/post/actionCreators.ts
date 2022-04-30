import { instance } from "../../../config/instance";
import { PostlTypes } from "./types";

const fetchAllPostsLoadingAction = () => {
  return { type: PostlTypes.FETCH_ALL_POSTS_LOADING };
};
const fetchAllPostsErrorAction = (error: any) => {
  return { type: PostlTypes.FETCH_ALL_POSTS_ERROR, payload: error };
};
const fetchAllPostsSecceesAction = (obj: any) => {
  return { type: PostlTypes.FETCH_ALL_POSTS_SECCEES, payload: obj };
};

const fetchOnePostLoadingAction = () => {
  return { type: PostlTypes.FETCH_ONE_POST_LOADING };
};
const fetchOnePostErrorAction = (error: any) => {
  return { type: PostlTypes.FETCH_ONE_POST_ERROR, payload: error };
};
const fetchOnePostSecceesAction = (obj: any) => {
  return { type: PostlTypes.FETCH_ONE_POST_SECCEES, payload: obj };
};

//получение всех постов (GET)
export const fetchAllPostsAction: any = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchAllPostsLoadingAction());
      const respons = await instance.get("posts");
      dispatch(fetchAllPostsSecceesAction(respons.data.items));
    } catch (error) {
      dispatch(fetchAllPostsErrorAction("Не удалось получить посты"));
      console.log(error);
    }
  };
};

//получение одного поста (GET)
export const fetchOnePostAction: any = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchOnePostLoadingAction());
      const respons = await instance.get("posts");
      dispatch(fetchOnePostSecceesAction(respons.data.items));
    } catch (error) {
      dispatch(fetchOnePostErrorAction("Не удалось получить посты"));
      console.log(error);
    }
  };
};    

//получение поста по id  (POST)
export const fetchOnePostsAction: any = (idPost: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchAllPostsLoadingAction());
      const respons = await instance.get(`posts/${idPost}`);
      dispatch(fetchAllPostsSecceesAction(respons.data));
    } catch (error) {
      dispatch(fetchAllPostsErrorAction("Не удалось получить пост"));
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
      dispatch(fetchAllPostsErrorAction("Не удалось создать пост"));
      console.log(error);
    }
  };
};

//редактировать пост (PATCH)
export const redactPostAction: any = (idPost: any, inputValue: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchAllPostsLoadingAction());
      await instance.patch(`posts/${idPost}`, {
        title: inputValue.title,
        text: inputValue.text,
      });
      dispatch(fetchAllPostsAction());
    } catch (error) {
      dispatch(fetchAllPostsErrorAction("Ошибка при редактирвоании поста "));
      console.log(error);
    }
  };
};

//удаление поста (DELETE)
export const deletedPostAction: any = (idPost: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchAllPostsLoadingAction());
      await instance.delete(`posts/${idPost}`);
      dispatch(fetchAllPostsAction());
    } catch (error) {
      dispatch(fetchAllPostsErrorAction("Ошибка при удалении поста "));
      console.log(error);
    }
  };
};

// ЗАГРУЖЕНИЕ ИЗОБРАЖЕНИЯ (СДЕЛАТЬ)
