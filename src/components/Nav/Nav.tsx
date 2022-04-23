import React from "react";
import s from "./Nav.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faXmark,
  faCaretDown,
  faHouse,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../hooks/useAppSelector";
import { exiteAccountUserAction } from "../redux/actions/userActions";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, fullName, createdAt } = useAppSelector(
    (state) => state.userReducer.user
  );

  console.log(createdAt);
  
  const [openSideBar, setOpenSideBar] = React.useState(true);
  const onClickBtnHome = () => {};
  const onClickCloseMenu = () => {};
  const onClickToggleMenu = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };
  const onClickMyProfile = () => {};
  const onClickCreatePost = () => {};
  const onClickExiteProfile = () => {
    dispatch(exiteAccountUserAction());
    navigate("/home");
  };

  return (
    <div
      onClick={onClickToggleMenu}
      style={openSideBar ? {} : { width: "70px " }}
      className={s.container}
    >
      {
        // Переделать под компоненты
        openSideBar ? (
          <div className={s.content}>
            <div
              className={s.container_block}
              style={openSideBar ? { display: "block" } : { display: "none" }}
            >
              <div className={s.container_block_thisis}>
                <Link to="/home">
                  <p>THISIS</p>
                </Link>
              </div>
              <div className={s.container_block_avatar}>
                <img
                  src="https://avatars.githubusercontent.com/u/71372134?v=4"
                  alt="'"
                />
              </div>
              <div className={s.container_block_name}>
                <p>{fullName} </p>
                <div className={s.container_block_name_icon}>
                  <Link className={s.container_block_name_icon} to="/home">
                    <div
                      onClick={onClickBtnHome}
                      style={{ marginRight: "10px" }}
                      className={s.icon}
                    >
                      <FontAwesomeIcon icon={faHouse} size="lg" />
                      <span className={s.tooltiptext}> Home</span>
                    </div>
                  </Link>
                  {token && (
                    <Link className={s.container_block_name_icon} to="/profile">
                      <div
                        onClick={onClickMyProfile}
                        style={{ marginRight: "10px" }}
                        className={s.icon}
                      >
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        <span className={s.tooltiptext}> Профиль</span>
                      </div>
                    </Link>
                  )}

                  <Link className={s.container_block_name_icon} to="/home">
                    <div style={{ marginRight: "10px" }} className={s.icon}>
                      <FontAwesomeIcon icon={faGear} size="lg" />
                      <span className={s.tooltiptext}>Настройки</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className={s.container_block_nav}>
                <div
                  onClick={onClickBtnHome}
                  className={s.container_block_nav_text}
                >
                  <Link className={s.Link} to="/home">
                    <p>Home</p>
                  </Link>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
                {token && (
                  <>
                    <div
                      onClick={onClickMyProfile}
                      className={s.container_block_nav_text}
                    >
                      <Link className={s.Link} to="/profile">
                        <p> My profile</p>
                      </Link>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div
                      onClick={onClickCreatePost}
                      className={s.container_block_nav_text}
                    >
                      <Link className={s.Link} to="/create_post">
                        <p> Сreate post</p>
                      </Link>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div
                      onClick={onClickExiteProfile}
                      className={s.container_block_nav_text}
                    >
                      <Link className={s.Link} to="/home">
                        <p>Exit</p>
                      </Link>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className={s.container_block_footer}>
              <div className={s.container_block_footer_data}>
                <p>
                  {createdAt &&
                    `Дата регистрации: ${new Date(createdAt).toLocaleString(
                      "ru",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      }
                    )}`}
                </p>
              </div>
              <div
                onClick={onClickCloseMenu}
                className={s.container_block_footer_icon_menu}
              >
                <div style={{ marginRight: "10px" }} className={s.icon}>
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </div>
                <p>Меню</p>
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

export default Nav;
