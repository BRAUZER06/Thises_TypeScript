import React from "react";
import "easymde/dist/easymde.min.css";
import styles from "./SectionCreatePost.module.scss";
import { SimpleMdeReact } from "react-simplemde-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../redux/ducks/post/actionCreators";

const SectionCreatePost = () => {
  const dispatch = useDispatch();
  const [valueInput, setInputValue] = React.useState({
    title: "",
    description: "",
    photoUrl: "",
    text: "",
  });

  const onClickGetForm = async (event) => {
    event.preventDefault();
    dispatch(createPostAction(valueInput));
  };

  const onChangeInputValue = (event) => {
    setInputValue({ ...valueInput, [event.target.name]: event.target.value });
  };
  const onChangeTextAreaValue = (event, name) => {
    setInputValue({ ...valueInput, [name]: event });
  };

  const onClickClearForm = () => {
    setInputValue({
      title: "",
      description: "",
      photoUrl: "",
      text: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <form className={styles.container_content_form}>
          <input
            className={styles.container_content_form_input_1}
            type="text"
            name="title"
            placeholder="Введите заголовок..."
            value={valueInput.title}
            onChange={(e) => onChangeInputValue(e)}
          />
          <div className={styles.container_content_form_div_description}>
            <p>Короткое описание</p>
            <textarea
              type="text"
              name="description"
              className={styles.container_content_form_input_2}
              value={valueInput.description}
              onChange={(e) => onChangeInputValue(e)}
            />
          </div>
          <div className={styles.container_content_form_div_img}>
            <p>Ссылка на изображение:</p>
            <div className={styles.container_content_form_div_img_form}>
              <input
                className={styles.container_content_form_input_3}
                type="text"
                name="photoUrl"
                value={valueInput.photoUrl}
                onChange={(e) => onChangeInputValue(e)}
              />
              <button
                onClick={() => {
                  alert("убрал из-за багов во время деплоя");
                }}
              >
                <i>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faArrowUpFromBracket}
                  />
                </i>
                Загрузить
              </button>
            </div>
          </div>
          <div className={styles.container_content_form_footer}>
            <p>Полное описание</p>
            <SimpleMdeReact
              value={valueInput.text}
              onChange={(e) => onChangeTextAreaValue(e, "text")}
            />
            <div className={styles.container_content_form_footer_div}>
              <button
                className={styles.container_content_form_footer_div_btn1}
                onClick={onClickClearForm}
              >
                Очистить
              </button>
              <button
                className={styles.container_content_form_footer_div_btn2}
                onClick={onClickGetForm}
              >
                Опубликовать
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionCreatePost;
