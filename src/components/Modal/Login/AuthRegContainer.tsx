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
  const [inputValue, setInputValue] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { toggleRegisAuth, modalChecked } = useAppSelector(
    (state) => state.modal
  );

  

  const dispatch = useDispatch();
  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  //закрытие меню
  const closeMenuAutoReg = (e: any) => {
    dispatch(modalCheckedAction(false));
  };

  //переключатель с Авториз на Регист
  const onClickToggleMenuAutoReg = () => {
    dispatch(modalCheckedRegistAuthAction(!toggleRegisAuth));
  };

  //клик на отправку формы
  const onClickGetForm = (e: any) => {};

  return (
    <>
      {modalChecked && (
        <div>
          {/* Если modalChecked true, показывай Modal'ку, если toggleRegisAuth false, показывай Authori иначе Regist */}
          {toggleRegisAuth ? (
            <Registration
              onChangeInput={onChangeInput}
              closeMenuAutoReg={closeMenuAutoReg}
              onClickToggleMenuAutoReg={onClickToggleMenuAutoReg}
              onClickGetForm={onClickGetForm}
            />
          ) : (
            <Authorization
              onChangeInput={onChangeInput}
              closeMenuAutoReg={closeMenuAutoReg}
              onClickToggleMenuAutoReg={onClickToggleMenuAutoReg}
              onClickGetForm={onClickGetForm}
            />
          )}
        </div>
      )}
    </>
  );
};

export default LoginContainer;
