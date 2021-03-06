import { instance } from "../../../config/instance";
import { UserTypes } from "./types";

export const fetchUserErrorAction = (error: null | string) => {
  return { type: UserTypes.FETCH_USER_ERROR, payload: error };
};

export const fetchUserLoadingAction = () => {
  return { type: UserTypes.FETCH_USER_LOADING };
};

export const fetchUserSucceesAction = (obj: any) => {
  return { type: UserTypes.FETCH_USER_SUCCEES, payload: obj };
};

export const exiteAccountUserAction = () => {
  return { type: UserTypes.EXITE_ACCOUNT_USER };
};

//Регистрация пользователя
export const fetchRegistUserAction: any = (inputValue: any) => {
  //тут сделать прверку во время регистрации на занятость пользователя
  return async (dispatch: any) => {
    try {
      dispatch(fetchUserLoadingAction());
      const respons = await instance.post("auth/register", {
        fullName: inputValue.fullName,
        email: inputValue.email,
        password: inputValue.password,
      });
      dispatch(fetchInfoUserAction(respons.data._id));
      window.localStorage.setItem("token", respons.data.token);
      window.localStorage.setItem("userId", respons.data._id);
    } catch (error) {
      dispatch(fetchUserErrorAction("Регистрация не удалась "));
      console.log(error);
    }
  };
};

//Авторизация пользователя
export const fetchAuthUserAction: any = (inputValue: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchUserLoadingAction());
      const respons = await instance.post("auth/login", {
        email: inputValue.email,
        password: inputValue.password,
      });
      dispatch(fetchInfoUserAction(respons.data._id));

      window.localStorage.setItem("token", respons.data.token);
      window.localStorage.setItem("userId", respons.data._id);
    } catch (error) {
      dispatch(fetchUserErrorAction("Авторизация не удалась"));
      console.log(error);
    }
  };
};

//МЫ НЕ ПОЛУЧАЕМ ДАТУ, ЧТОБЫ ПОЛУЧИТЬ НУЖНО ОТПРАВИТЬ ЕЩЕ ОДИН ЗАПРОС
//С ПОИСКОМ ПОЛЬЗОВАТЕЛЯ
//При авторизации не получает дату, приходится запрашивать дополнительно данные
//через отдельный запрос

// Получении информации о пользователе  (также допольнитель получает посты и комментария пользователя)
export const fetchInfoUserAction: any = (id: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchUserLoadingAction());
      const respons = await instance.get(`users/${id}`);
      dispatch(fetchUserSucceesAction(respons.data));
    } catch (error) {
      dispatch(fetchUserErrorAction("Авторизация не удалась"));
      console.log(error);
    }
  };
};
