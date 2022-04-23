import React from "react";
import s from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faArrowRightToBracket,
  faUser,
  faXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  headerInputValueAction,
  headerCheckedInputAction,
  headerCheckedLoginAction,
} from "../../components/redux/actions/headerAction";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/useAppSelector";
import { modalCheckedAction } from "../redux/actions/modalActiom";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { inputValue } = useAppSelector((state) => state.header);
  const { checkedInput, checkedModalLogin } = useAppSelector(
    (state) => state.header
  );
  //связать с modal Reg Autho
  //пользователь зарегался 
  const [checkedProfile, setToggleProfile] = React.useState(false);

  const onClickName = () => {
    navigate("/");
  };
  const onClickCreatePost = () => {
    //сделать проверку на регистрацию пользователя
    //авторизация
  };
  const onClickExiteProfile = () => {
    window.localStorage.clear();
    //прокидывать в modal пустую строку
    //авторизация
  };
  const onClickToggleInput = () => {
    dispatch(headerCheckedInputAction(!checkedInput));
  };
  const onClickLoginInProfile = () => {
    dispatch(modalCheckedAction(true));
  };

  const onChangeInput = (e: any) => {
    dispatch(headerInputValueAction(e.target.value));
  };

  return (
    <header className={s.header}>
      {checkedInput ? (
        <div className={s.header_input}>
          <input
            value={inputValue}
            onChange={onChangeInput}
            type="text"
            placeholder="Поиск статьи по заголовку или тексту..."
          />
          <FontAwesomeIcon
            onClick={onClickToggleInput}
            style={{ fontSize: 32, cursor: "pointer", padding: "3px" }}
            icon={faXmark}
          />
        </div>
      ) : (
        <div className={s.header_container}>
          <Link className={s.Link} to="/">
            <div onClick={onClickName} className={s.header_container_left}>
              <p>MEDA BLOG</p>
            </div>
          </Link>

          <div className={s.header_container_right}>
            <div className={s.header_container_right_icon_block_left}>
              <Link className={s.Link} to="/">
                <div
                  onClick={onClickToggleInput}
                  style={{ marginRight: "15px" }}
                  className={s.icon}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  <span className={s.tooltiptext}> Поиск</span>
                </div>
              </Link>

              {checkedProfile ? (
                <>
                  <Link className={s.Link} to="/">
                    <div
                      onClick={onClickCreatePost}
                      style={{ marginRight: "10px" }}
                      className={s.icon}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                      <span className={s.tooltiptext}> Написать</span>
                    </div>
                  </Link>
                  <Link className={s.Link} to="/">
                    <div
                      onClick={onClickExiteProfile}
                      style={{ marginRight: "10px" }}
                      className={s.icon}
                    >
                      <FontAwesomeIcon icon={faArrowRightToBracket} size="lg" />
                      <span className={s.tooltiptext}> Выйти</span>
                    </div>
                  </Link>
                </>
              ) : (
                <Link className={s.Link} to="/">
                  <div
                    onClick={onClickLoginInProfile}
                    className={
                      (s.header_container_right_icon_block_right, s.icon)
                    }
                  >
                    <div className={s.icon}>
                      <FontAwesomeIcon icon={faUser} size="lg" />
                      <span className={s.tooltiptext}>Войти</span>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
