import React from "react";
import "../../css/index.css";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import { PathIcons } from "../../util/PathIcons";
import InputField from "../inputs/InputField";
const CardPost = ({ id }) => {
  //  const user =
  //  console.log("user" , user.username)
  const postData = JSON.parse(sessionStorage.getItem("user"));
  console.log();

  const post = postData.status;

  // console.log(data.username);
  return (
        <>
        {post.map((data, index) => {
          return (
            <div className="row container_post">
      <div className="col-12 p-4">
            <div key={index}>
              <div className="header_post d-flex align-items-center mt-5 gap-3">
                <ImageUser image={postData.image} width={60} />
                <div>
                  <span className="user_name_post d-block">{postData.username}</span>
                  <span className="time_post d-block">{`${15} mins ago`}</span>
                </div>
                <span className="menu_dots_post">{PathIcons.menuDots}</span>
              </div>
                <p className="pt-3 mb-2">{data.text}</p>
              <div className="body_post py-4">
                {data.img !== "" ? (
                  <img src={data.img} alt="image_post" />
                ) : null}
              </div>
              <div className="footer_post">
                <div className="d-flex gap-4">
                  <div className="like-post d-flex align-items-center gap-2">
                    {PathIcons.like}
                    {` ${data.like}`}
                  </div>
                  <div className="comment-post d-flex align-items-center gap-2">
                    {PathIcons.comment}
                    {` ${data.comment}`}
                  </div>
                </div>
                <InputField />
              </div>
            </div>
              </div>
              </div>
          );
        }).reverse()}
   </>
  );
};

export default CardPost;
