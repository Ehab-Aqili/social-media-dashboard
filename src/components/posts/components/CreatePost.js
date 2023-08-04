import React, { useState } from "react";
import ImageUser from "../../cache_image/ImageUser";
import userData from "../../../data/data";
import "../../../css/index.css";
import UploadFile from "./UploadFile";
import { KeyLang } from "../../../util/KeyLang";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./create_post.css";



const myUser = JSON.parse(sessionStorage.getItem('user'))
console.log(myUser.userId)



// const x = "64cbb5f0928d1a0a0b18873c"
const CreatePost = (props) => {
  const [postContent, setPostContent] = useState("");
  const { t } = useTranslation();
  const [postDone, setPostDone] = useState(null)
  const [error, setError] = useState(null)

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };
  const handlePostSubmit = async () => {
    // console.log(postContent);

    try {
      const response = await axios.patch(`http://localhost:8080/user/create-post/${myUser.userId}`, {
        text: postContent,
        feeling: props.selectedFeeling,
        img: '',
        comment: 501,
        like: 201,
      }).catch((err) => {
        if (err && err.response) {
          setError(err.response.data.message)
          setPostDone(null)
          setPostContent('')
        }
      })
      if (response && response.data) {
        setPostDone(response.data.message.message)
        setPostContent('')
        setError(null)
      }
    } catch (error) {
      console.error('Error postin user satus:', error);
    }

  };
  return (
    <div className="container_create_post">
      <span className={postDone ? "postDone" : 'postFail'}>{postDone ? postDone : error}</span>
      <div className="d-flex align-items-center gap-3">
        <ImageUser image={userData[0].image} width={50} />
        <div className="">{myUser.username}</div>
        <div style={{ fontWeight: "bold" }}>
          {props.text}
          {props.selectedFeeling}
          {props.selectedFeelingEmoji}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          name="textarea_create_post"
          className="textarea_create_post"
          placeholder={`What's on your mind? ${myUser.username.split(' ')[0]}`}
          cols="30"
          rows={6}
          value={postContent}
          onChange={handlePostChange}
        ></textarea>
      </div>
      {/* ***-------------UploadFile***------------- */}
      <UploadFile />

      {/* ***-------------btn post***------------- */}
      <button
        style={{
          backgroundColor: !postContent.trim() ? "#BCBCBC" : "#a303a0",
        }}
        className="btn_create_post mt-3 "
        disabled={!postContent.trim()}
        onClick={handlePostSubmit}
      >
        {t(KeyLang.postButton)}
      </button>
    </div>
  );
};

export default CreatePost;
