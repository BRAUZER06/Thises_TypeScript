import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "./SectionAllPosts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import {
  deletedPostAction,
  fetchAllPostsAction,
} from "../../redux/ducks/post/actionCreators";
import { fetchInfoUserAction } from "../../redux/ducks/user/actionCreators";

const SectionAllPosts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, error, loading } = useAppSelector((state) => state.post);

  const userId = useAppSelector((state) => state.user.user._id);
  const onClickDeletedPost = (postId: string) => {
    dispatch(deletedPostAction(postId));
  };
  console.log(id);
  

  React.useEffect(() => {
    dispatch(fetchAllPostsAction());
  }, []);
  if (posts) {
    <h1>Loding....</h1>;
  }

  return (
    <div>
      <div className={styles.container}>
        {posts &&
          posts.map((post: any) => (
            <div key={post._id}>
              <div
                className={classNames(styles.content, {
                  [styles.content_active]: userId === `/checkPost/${post._id}`,
                })}
                key={post._id}
              >
                <div className={styles.container_div}>
                  <Link
                    className={styles.Link}
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
                      <FontAwesomeIcon
                        icon={faEye}
                        className={styles.icon_color_black}
                      />
                      <span className={styles.container_div_sub_div_span}>
                        {post.views}
                      </span>
                      {userId === post.user?._id && (
                        <>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className={
                              (styles.container_div_sub_div_icon,
                              styles.icon_color_trash)
                            }
                            onClick={() => onClickDeletedPost(post._id)}
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
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className={styles.content_photo}
                    src={post.photoUrl}
                    alt="Фото нет"
                  />
                </div>
              </div>
            </div>
          ))}
        <div className={styles.container_pagination}>
          {/* <Paginations
            paginate={paginate}
            totalPosts={downloadPostsAllNumbers}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SectionAllPosts;
