import React from "react";
import Authorization from "./Authorization";
import Registration from "./Registration";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import {
  modalCheckedAction,
  modalCheckedRegistAuthAction,
  // modalInputValueActions,
} from "../../../redux/ducks/modal/actionCreators";
import { fetchInfoUserAction } from "../../../redux/ducks/user/actionCreators";

const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.user.user.token);
  const { toggleRegisAuth, modalChecked } = useAppSelector(
    (state) => state.modal
  );

  React.useEffect(() => {
    //это не нужно было делать кнш, но лучше подсраховаться )
    if (token) dispatch(modalCheckedAction(false));
  }, [token]);

  //Закрывает модальное окно с регистрацией
  const closeMenuAutoReg = () => {
    dispatch(modalCheckedAction(false));


  };

  //переключатель с Авторизации на Регистрацию
  const onClickToggleMenuAutoReg = () => {
    dispatch(modalCheckedRegistAuthAction(!toggleRegisAuth));
  };

  return (
    <>
      {modalChecked && (
        <div>
          {/* Если modalChecked true, показывай Modal'ку, если toggleRegisAuth false, показывай компонент Authori, иначе показывай Regist */}
          {toggleRegisAuth ? (
            <Registration
              closeMenuAutoReg={closeMenuAutoReg}
              onClickToggleMenuAutoReg={onClickToggleMenuAutoReg}
            />
          ) : (
            <Authorization
              closeMenuAutoReg={closeMenuAutoReg}
              onClickToggleMenuAutoReg={onClickToggleMenuAutoReg}
            />
          )}
        </div>
      )}
    </>
  );
};

export default LoginContainer;
