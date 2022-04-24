import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import s from "./Section_right_All_Posts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../hooks/useAppSelector";

const SectionAllPosts = () => {
  const { __v, _id } = useAppSelector((state) => state.userReducer.user);
  const { id } = useParams();
  const [downloadPostSkeleton, setDownloadPostSkeleton] = React.useState(false);
  const [downloadPosts, setDownloadPosts] = React.useState([]);
  const [downloadPostsAllNumbers, setDownloadPostsAllNumbers] = React.useState(
    []
  );
  const [filterInputValue]=React.useState([{_id:1,title:2,description:3,user:'1'}])





  const removeMyPostClickBtn = async () => {};



React.useEffect(()=>{
  
},[])


  return (
    <div>
      <div className={s.container}>
        {filterInputValue.map((e) => (
          <Link
            className={s.container_Link}
            to={`/check_post_and_comment/${e._id}`}
            key={e._id}
          >
            <div
              className={classNames(s.content, {
                [s.content_active]:
                  window.location.pathname ===
                  `/check_post_and_comment/${e._id}`,
              })}
              key={e._id}
            >
              <div className={s.container_div}>
                <h2 className={s.container_div_h2}>{e.title}</h2>
                <p className={s.container_div_p}>{e.description}</p>
                <div className={s.container_div_sub}>
                  {/* <p className={s.container_div_sub_p}>
                    {new Date(e.createdAt).toLocaleString("ru", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    })}
                  </p> */}
                  <div className={s.container_div_sub_div}>
                    <FontAwesomeIcon
                      icon={faEye}
                      className={s.icon_color_black}
                    />
                    <span className={s.container_div_sub_div_span}>{__v}</span>
                    {/* {_id === e.user._id && ( */}
                      <>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className={
                            (s.container_div_sub_div_icon, s.icon_color_trash)
                          }
                          // onClick={() => removeMyPostClickBtn(e._id)}
                        />
                        <Link to={`/redact_post/${e._id}`}>
                          <FontAwesomeIcon
                            className={
                              (s.container_div_sub_div_icon,
                              s.icon_color_trash,
                              s.Pan_To_Square)
                            }
                            icon={faPenToSquare}
                          />
                        </Link>
                      </>
                    {/* ) } */}
                  </div>
                </div>
              </div>
              <div>
                <img
                  className={s.content_photo}
                  // src={e.photoUrl}
                  alt="Фотки нэт"
                />
              </div>
            </div>
          </Link>
        ))}
        <div className={s.container_pagination}>
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
