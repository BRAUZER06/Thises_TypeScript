import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {value_InputHeader, toggle_InputCheckHeader,} from "../../redux/header/action";
// import {onClick_ToggleMenuAutoReg, close_MenuAutoReg,} from "../../redux/modal/action";
// import {createRecord_MenuNav, exiteProfile_MenuNav, home_MenuNav, toggle_MenuNav,} from "../../redux/sidebar/action";

import {
  faMagnifyingGlass,
  faArrowRightToBracket,
  faUser,
  faXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [toggleOpenSearch, setToggleOpenSearch] = React.useState(true);

  const homeMenuNav = () => {};
  const closeMenuAutoReg = () => {};
  const createRecordMenuNav = () => {};
  const exiteProfileMenuNav = () => {};
  const closeSearch = (): void => {
    setToggleOpenSearch(false);
    
  };
  const onClickToggleMenuAutoReg = () => {};
  console.log(toggleOpenSearch);






  const valueInputHeader: React.ChangeEventHandler<HTMLInputElement> = (
    e: any
  ): void => {
    setInputValue(e.target.value);
  };





  return (
    <header className={styles.header}>
      {toggleOpenSearch ? (
        <div className={styles.header_input}>
          <input
            value={inputValue}
            onChange={valueInputHeader}
            type="text"
            placeholder="Поиск статьи по заголовку или тексту..."
          />
          <FontAwesomeIcon
            onClick={closeSearch}
            style={{ fontSize: 32, cursor: "pointer", padding: "3px" }}
            icon={faXmark}
            // size="xl"
          />
        </div>
      ) : (
        <div className={styles.header_container}>
          <Link className={styles.Link} to="/home">
            <div onClick={homeMenuNav} className={styles.header_container_left}>
              <p>VASYA BLOG</p>
            </div>
          </Link>

          <div className={styles.header_container_right}>
            <div className={styles.header_container_right_icon_block_left}>
              <Link className={styles.Link} to="#">
                <div style={{ marginRight: "15px" }} className={styles.icon}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  <span className={styles.tooltiptext}> Поиск</span>
                </div>
              </Link>

            
               
                  <Link className={styles.Link} to="/create_post">
                    <div
                      onClick={createRecordMenuNav}
                      style={{ marginRight: "10px" }}
                      className={styles.icon}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                      <span className={styles.tooltiptext}> Написать</span>
                    </div>
                  </Link>
                  <Link className={styles.Link} to="/home">
                    <div
                      onClick={exiteProfileMenuNav}
                      style={{ marginRight: "10px" }}
                      className={styles.icon}
                    >
                      <FontAwesomeIcon icon={faArrowRightToBracket} size="lg" />
                      <span className={styles.tooltiptext}> Выйти</span>
                    </div>
                  </Link>
               
              
                <Link className={styles.Link} to="/">
                  <div
                    onDoubleClick={() => closeMenuAutoReg()}
                    onClick={onClickToggleMenuAutoReg}
                    className={
                      (styles.header_container_right_icon_block_right,
                      styles.icon)
                    }
                  >
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faUser} size="lg" />
                      <span className={styles.tooltiptext}>Войти</span>
                    </div>
                  </div>
                </Link>
              
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
