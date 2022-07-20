import React from "react";
import styles from "./SectionMyProfile.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import {
  fetchAllCommentAction,
  fetchAllCommentPostAction,
} from "../../redux/ducks/comment/actionCreators";
import { fetchAllPostsAction } from "../../redux/ducks/post/actionCreators";

const SectionMyProfile: React.FC = () => {
  const [checkedPostOrComment, setCheckedPostOrComment] = React.useState(false);
  const { posts } = useAppSelector((state) => state.post);
  const { comments } = useAppSelector((state) => state.comment);
  const userId = useAppSelector((state) => state.user.user._id);
  console.log(userId);
  console.log(posts);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllPostsAction());
    dispatch(fetchAllCommentAction());
  }, []);
  const toggleCheckedPostComment = (name: string) => {
    if (name === "Статьи") {
      setCheckedPostOrComment(false);
    } else if (name === "Комментарии") {
      setCheckedPostOrComment(true);
    }
  };

  return (
    <div className={styles.profile}>
      <Link className={styles.Link} to="/home">
        <p className={styles.profile_p}>VASYA BLOG</p>
      </Link>

      <div className={styles.container}>
        <p className={styles.container_name}>
          {window.localStorage.getItem("fullName")}
        </p>
        <p className={styles.container_data}>
          Дата регистрации:<strong>12 августа 2019 в 08:06</strong>
        </p>

        <hr />

        <div className={styles.container_content}>
          <p
            onClick={(e: any) => toggleCheckedPostComment(e.target.innerHTML)}
            className={
              checkedPostOrComment ? "" : styles.container_content_active_hover
            }
          >
            Статьи
          </p>
          <p
            onClick={(e: any) => toggleCheckedPostComment(e.target.innerHTML)}
            className={
              checkedPostOrComment ? styles.container_content_active_hover : ""
            }
          >
            Комментарии
          </p>
        </div>

        {!checkedPostOrComment &&
          posts
            ?.filter((post) => post.user?._id === userId)
            ?.map((post: any) => (
              <div className={styles.content} key={post._id}>
                <div className={styles.container_div}>
                  <Link
                    className={styles.container_Link}
                    to={`/checkPost/${post._id}`}
                    key={post._id}
                  >
                    <h2 className={styles.container_div_h2}>{post.title}</h2>

                    <p className={styles.container_div_p}>{post.description}</p>
                  </Link>
                  <div className={styles.container_div_sub}>
                    <p className={styles.container_div_sub_p}>
                      {new Date(post.createdAt).toLocaleString("ru", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                      })}
                    </p>
                    <div className={styles.container_div_sub_div}>
                      <FontAwesomeIcon icon={faEye} />
                      <span className={styles.container_div_sub_div_span}>
                        {post.views}
                      </span>
                      {userId === post.user?._id ? (
                        <>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className={
                              (styles.container_div_sub_div_icon,
                              styles.icon_color_trash)
                            }
                          />
                          <Link to={`/redactPost/${post._id}`}>
                            <FontAwesomeIcon
                              className={
                                (styles.container_div_sub_div_icon,
                                styles.icon_color_trash,
                                styles.Pan_To_Square)
                              }
                              icon={faPenToSquare}
                            />
                          </Link>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className={styles.content_photo}
                    src={post.photoUrl}
                    alt="Фотки нэт"
                  />
                </div>
              </div>
            ))}
        {checkedPostOrComment &&
          comments
            ?.filter((comment) => comment.user._id === userId)
            ?.map((comment: any) => (
              <div className={styles.content} key={comment._id}>
                <div className={styles.container_div}>
                  <h2 className={styles.container_div_h2}>{comment.text}</h2>
                  <p className={styles.container_div_p}>
                    {comment.description}
                  </p>
                  <div className={styles.container_div_sub}>
                    <p className={styles.container_div_sub_p}>
                      {new Date(comment.createdAt).toLocaleString("ru", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                      })}
                    </p>
                    <div className={styles.container_div_sub_div}>
                      <FontAwesomeIcon icon={faEye} />
                      <span className={styles.container_div_sub_div_span}>
                        {Math.floor(Math.random() * 101)}
                      </span>
                      {comment.user._id === userId ? (
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className={
                            (styles.container_div_sub_div_icon,
                            styles.icon_color_trash)
                          }
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className={styles.content_photo}
                    src={comment.photoUrl}
                    alt="Фотки нэт"
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SectionMyProfile;
