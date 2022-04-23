import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthReg.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchRegistUserAction } from "../../redux/actions/userActions";
type RegistrationProps = {
  closeMenuAutoReg: (e: any) => void;
  onClickToggleMenuAutoReg: (e: any) => void;
};

const Registration: React.FC<RegistrationProps> = ({
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

  const onClickGetFormRegis = () => {
    dispatch(fetchRegistUserAction(inputValue));
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
            <h2>Регистрация</h2>
            <Link className={styles.Link} to="home">
              <FontAwesomeIcon
                onClick={() => closeMenuAutoReg()}
                icon={faXmark}
                className={styles.autorization_div_icon}
              />
            </Link>
          </div>
          <form
            className={styles.autorization_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <p> Имя и фамилия:</p>
              <input
                {...register("fullName", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  maxLength: {
                    value: 32,
                    message: "Слишком много символов",
                  },
                })}
                onChange={onChangeInput}
                name="fullName"
                type="text"
              />
            </label>
            <div className={styles.error}>
              {errors?.fullName && (
                <p>{errors?.fullName?.message || "Error!"}</p>
              )}
            </div>

            <label>
              <p>Email:</p>
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 1,
                    message: "Минимум 1 символ",
                  },
                })}
                onChange={onChangeInput}
                name="email"
                type="text"
              />
            </label>
            <div className={styles.error}>
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>

            <label>
              <p>Пароль</p>
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
              onClick={onClickGetFormRegis}
              name="registration"
              value="Регистрация"
              className={styles.input_submit}
              type="submit"
              disabled={!isValid}
            />
          </form>
          <p
            onClick={onClickToggleMenuAutoReg}
            className={styles.autorization_Footer}
          >
            Войти в аккаунт
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
