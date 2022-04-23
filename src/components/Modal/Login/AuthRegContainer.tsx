import React from "react";
import Authorization from "./Authorization";
import Registration from "./Registration";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import {
  modalCheckedAction,
  modalCheckedRegistAuthAction,
  // modalInputValueActions,
} from "../../redux/actions/modalActiom";

const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.userReducer.user.token);
  const { toggleRegisAuth, modalChecked } = useAppSelector(
    (state) => state.modal
  );

  React.useEffect(() => {
    if (token) dispatch(modalCheckedAction(false));
  }, [token]);

  //закрытие меню
  const closeMenuAutoReg = (e: any) => {
    dispatch(modalCheckedAction(false));
  };

  //переключатель с Авториз на Регист
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
