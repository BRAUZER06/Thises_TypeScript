import React from "react";
import Authorization from "./Authorization";
import Registration from "./Registration";

const LoginContainer:React.FC = () => {


  
  const onChangeInput = (e: any):void => {};

  //закрытие меню
  const closeMenuAutoReg = (e: any) => {};

  //переключатель с Авториз на Регист
  const onClickToggleMenuAutoReg = (e: any) => {};

  //клик на отправку формы
  const onClickGetForm = (e: any) => {};

  return (
    <div>
      <Authorization
        onChangeInput={onChangeInput}
        closeMenuAutoReg={closeMenuAutoReg}
        onClickToggleMenuAutoReg={onClickToggleMenuAutoReg}
        onClickGetForm={onClickGetForm}
      />
      <Registration
        onChangeInput={onChangeInput}
        closeMenuAutoReg={closeMenuAutoReg}
        onClickToggleMenuAutoReg={onClickToggleMenuAutoReg}
        onClickGetForm={onClickGetForm}
      />
    </div>
  );
};

export default LoginContainer;