import React from "react";
import { useParams } from "react-router-dom";

import styles from "./SectionCechkPost.module.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instance } from "../../config/instance";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { fetchOnePostAction } from "../../redux/ducks/post/actionCreators";
import {
  createCommentAction,
  fetchAllCommentPostAction,
} from "../../redux/ducks/comment/actionCreators";

const SectionCechkPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState<string>("");

  const {
    error: errorPost,
    loading: loadingPost,
    post: fetchPost,
  } = useAppSelector((state) => state.post.checkOnePost);

  const { comments: fetchComments } = useAppSelector((state) => state.comment);

  React.useEffect(() => {
    dispatch(fetchOnePostAction(id));
    dispatch(fetchAllCommentPostAction(id));
  }, [id]);

  const onClickButtonInputForm = () => {
    dispatch(createCommentAction(inputValue, id));
    setInputValue("");
  };

  const onChangeInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  if (errorPost) {
    return <h2>Произошла ошибка при загрузке поста...</h2>;
  }
  if (loadingPost) {
    return <h2>Подождите идет загрузка поста...</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_photo}>
        <img
          onClick={(e) => console.log(e)}
          src={fetchPost?.photoUrl}
          // "https://brilliant24.ru/files/cat/template_01.png"
          alt="Фотки нэт"
        />
      </div>
      <div className={styles.container_up}>
        <div className={styles.container_up_div_1}>
          <p className={styles.container_up_div_1_p1}>
            {fetchPost?.createdAt &&
              new Date(fetchPost?.createdAt).toLocaleString("ru", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
          </p>
          <FontAwesomeIcon
            className={styles.container_up_div_1_icon}
            icon={faEye}
          />
          <p className={styles.container_up_div_1_p2}>55</p>
        </div>
        <div className={styles.container_up_div_2}>
          <h1 className={styles.container_up_div_2_h1}>{fetchPost.title}</h1>
          <p className={styles.container_up_div_2_p}>{fetchPost.description}</p>
        </div>
      </div>

      <div className={styles.container_down}>
        <p className={styles.container_down_text_1}>{fetchPost?.text}</p>
      </div>
      <div className={styles.container_comment}>
        <h2>Комментарии ({fetchComments ? fetchComments.length : 0})</h2>
        {fetchComments?.map((comment) => (
          <div key={comment._id} className={styles.container_comment_content}>
            <div className={styles.container_comment_content_div}>
              <p className={styles.container_comment_content_div_name}>
                {comment.user && comment.user.fullName}
              </p>
              <p className={styles.container_comment_content_div_data}>
                {new Date(comment.createdAt).toLocaleString("ru", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
            </div>
            <p className={styles.container_comment_content_footer_text}>
              {comment.text}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.container_comment_input}>
        <h2>Добавить комментарий</h2>
        <textarea onChange={onChangeInputValue} value={inputValue}></textarea>
        <button onClick={onClickButtonInputForm}>Отправить</button>
      </div>
    </div>
  );
};

export default SectionCechkPost;
