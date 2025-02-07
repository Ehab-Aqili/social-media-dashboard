import React from "react";
import "../../css/index.css";
import ImageUser from "../cache_image/ImageUser";
import Buttons from "../btn/Buttons";
import { PathIcons } from "../../util/PathIcons";
import Friends from "../friend_card/Friends";
import { useState } from "react";
import PopupFriends from "../popup/PopupFriends";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";

// temporary sol. for the image 
import cover from "../../assets/images/cover.jpg";
// import profilePic from "../../assets/images/img-user.png";
const profilePic ='https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
console.log(profilePic)


const CoverProfile = ({ sendData }) => {
  const data = sendData;  
  // console.log("C0ver" , data)
  const [buttonPopup, setButtonPopup] = useState(false);
  const { t } = useTranslation();

  buttonPopup
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
//  console.log(data)
  return (
    <div className="">
      <div className="container_profile">
        <img className="cover_profile" src={cover} alt="cover" />
        <ImageUser
          image={data.image}
          name="Mohammad"
          classImage={"image_profile"}
        />
        <div className="bottom_cover mt-4 px-5">
          <div className="user_name fs-3">{data.username}</div>

          <div className="btn_cover pt-2">
            <div
              className="fs-6 friends-profile"
              onClick={() => setButtonPopup(true)}
            >{`${data.friends.length} ${t(KeyLang.friend)}`}</div>
            {/* Popup */}
            <PopupFriends
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
              title={"Friends"}
            >
              <Friends />
            </PopupFriends>
            {/* <div className="d-flex gap-3">
              <Buttons
                text={t(KeyLang.message)}
                onPress={click}
                icon={PathIcons.messenger}
              />
              <Buttons
                text={t(KeyLang.addFriend)}
                onPress={click}
                icon={PathIcons.addFriend}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
// function click() {
//   console.log(1);
// }
export default CoverProfile;
