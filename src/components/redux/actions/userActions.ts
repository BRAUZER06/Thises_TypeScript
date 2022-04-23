import { instance } from "../../../config/instance";

// export const userInputValueAction = (value: string, name: string) => {
//   return {
//     type: "USER_INPUT_VALUE",
//     payload: {
//       value,
//       name,
//     },
//   };
// };

const fetchUserErrorAction = (error: any) => {
  return { type: "FETCH_USER_ERROR", payload: error };
};

const fetchUserLoadingAction = (loading: any) => {
  return { type: "FETCH_USER_LOADING", payload: loading };
};

const fetchUserSucceesAction = (arr: any) => {
  return { type: "FETCH_USER_SUCCEES", payload: arr };
};

export const fetchRegistUserAction = (inputValue: any) => {
  //тут сделать прверку во время регистрации на занятость пользователя
  return async (dispatch: any) => {
    try {
      dispatch(fetchUserLoadingAction(true));
      const respons = await instance.post("auth/register", {
        fullName: inputValue.fullName,
        email: inputValue.email,
        password: inputValue.password,
      });
      dispatch(fetchUserSucceesAction(respons.data));
    } catch (error) {
      dispatch(fetchUserErrorAction("Произошла ошибка"));
      console.log(error);
    }
  };
};

export const fetchAuthUserAction = (inputValue: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchUserLoadingAction(true));
      const respons = await instance.post("auth/login", {
        email: inputValue.email,
        password: inputValue.password,
      });
      dispatch(fetchUserSucceesAction(respons.data));
    } catch (error) {
      dispatch(fetchUserErrorAction("Произошла ошибка"));
      console.log(error);
    }
  };
};
