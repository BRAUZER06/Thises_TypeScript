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

const Header = () => {
  const navigate = useNavigate();
  const [toggleSearch, setToggleSearch] = React.useState(false);
  const [toggleProfile, setToggleProfile] = React.useState(true);

  const [inputValue, setInputValue] = React.useState("");
  const onClickName = () => {
    navigate("/");
  };
  const onClickCreatePost = () => {};
  const onClickExiteProfile = () => {
    setToggleProfile((toggleProfile) => !toggleProfile);
  };
  const onClickToggleInput = () => {
    //временно
    setToggleSearch((toggleSearch) => !toggleSearch);
  };
  const onClickToggleMenuAutoReg = () => {
    //временно
    setToggleProfile((toggleProfile) => !toggleProfile);
  };

  const onChangeInput = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <header className={s.header}>
      {toggleSearch ? (
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

              {toggleProfile ? (
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
                    onClick={onClickToggleMenuAutoReg}
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
