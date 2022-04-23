import React from "react";
import styles from "./AuthReg.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { fetchAuthUserAction } from "../../../redux/actions/userActions";
interface AuthorizationProps {
  closeMenuAutoReg: (e: any) => void;
  onClickToggleMenuAutoReg: (e: any) => void;
}

const Authorization: React.FC<AuthorizationProps> = ({
  closeMenuAutoReg,
  onClickToggleMenuAutoReg,
}: any) => {
  const [inputValue, setInputValue] = React.useState({});
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const dispatch = useDispatch();

  const onChangeInput = (e: any) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onClickGetFormAuth = () => {
    dispatch(fetchAuthUserAction(inputValue));
  };

  //React-Hook-Form
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data: any) => {
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.autorization}>
          <div className={styles.autorization_div}>
            <h2>Вход в аккаунт</h2>
            <FontAwesomeIcon
              onClick={() => closeMenuAutoReg()}
              className={styles.autorization_div_icon}
              icon={faXmark}
            />
          </div>
          <form
            className={styles.autorization_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <p>Email</p>
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 1,
                    message: "Минимум 1 символ",
                  },
                })}
                onChange={onChangeInput}
                type="text"
                name="email"
              />
            </label>
            <div className={styles.error}>
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>

            <label>
              <p>Пароль:</p>
              <input
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  maxLength: {
                    value: 64,
                    message: "Слишком много символов",
                  },
                })}
                onChange={onChangeInput}
                name="password"
                type="text"
              />
            </label>
            <div className={styles.error}>
              {errors?.password && (
                <p>{errors?.password?.message || "Error!"}</p>
              )}
            </div>

            <input
              onClick={onClickGetFormAuth}
              name="authorization"
              value="Авторизация"
              className={styles.input_submit}
              type="submit"
              disabled={!isValid}
            />
          </form>

          <p
            onClick={onClickToggleMenuAutoReg}
            className={styles.autorization_Footer}
          >
            У Вас еще нет аккаунта? Зарегистрироваться!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
