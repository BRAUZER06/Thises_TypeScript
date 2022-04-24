import React from "react";
import { useParams } from "react-router-dom";

import styles from "./SectionCechkPost.module.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instance } from "../../config/instance";
import { Post } from "../../types/post";

const SectionCechkPost = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [noImges, setNoImages] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [fetchPost, setFetchPost] = React.useState({
    createdAt: "",
    description: "",
    photoUrl: "",
    text: "",
    title: "",
    updatedAt: "",
    user: {
      createdAt: "",
      email: "",
      fullName: "",
      updatedAt: "",
      __v: 0,
      _id: "",
    },
    views: 0,
    __v: 0,
    _id: "",
  });
  const [fetchComments, setFetchComments] = React.useState([
    {
      createdAt: "",
      post: "",
      text: "",
      updatedAt: "",
      user: {
        createdAt: "",
        email: "",
        fullName: "",
        updatedAt: "",
        __v: 0,
        _id: "",
      },
      __v: 0,
      _id: "",
    },
  ]);

  console.log("useParams", id);

  React.useEffect(() => {
    setIsLoading(true);
    (async () => {
      await instance
        .get(`posts/${id}`)
        .then((res: any) => setFetchPost(res.data));
      setIsLoading(false);
      await instance
        .get(`comments/post/${id}`)
        .then((res: any) => setFetchComments(res.data));
    })();
  }, [id]);
  console.log(fetchComments);

  console.log(fetchPost);

  const onClickButtonInputForm = async () => {};

  const noImg = () => {
    if (fetchPost.photoUrl.indexOf("http") === 0) {
      setNoImages(false);
    } else {
      setNoImages(true);
    }
  };

  const onChangeInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_photo}>
        <img
          onClick={(e) => console.log(e)}
          src={
            noImges
              ? "https://brilliant24.ru/files/cat/template_01.png"
              : fetchPost.photoUrl
          }
          alt="Фотки нэт"
        />
      </div>
      <div className={styles.container_up}>
        <div className={styles.container_up_div_1}>
          <p className={styles.container_up_div_1_p1}>
            {new Date(fetchPost.createdAt).toLocaleString("ru", {
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
        <p className={styles.container_down_text_1}>{fetchPost.text}</p>
      </div>
      <div className={styles.container_comment}>
        <h2>Комментарии ({fetchComments.length})</h2>
        {fetchComments.map((comment) => (
          <div key={comment._id} className={styles.container_comment_content}>
            <div className={styles.container_comment_content_div}>
              <p className={styles.container_comment_content_div_name}>
                {/* выдает ошибку comment.user.fullName ( наверное коддировка ) */}
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
