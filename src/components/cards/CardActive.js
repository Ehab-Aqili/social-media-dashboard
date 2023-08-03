import React from "react";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
const CardActive = ({ id }) => {
  const { t } = useTranslation();

  // const[]

  const data = JSON.parse(sessionStorage.getItem('user'))
  let newData = []
  newData.push(data)
  // console.log(newData[0].friends)

  return (
    <div className="cardactive">
      <h5 className="mb-3">{t(KeyLang.active)}</h5>

      {
        newData.map((user, index) => {
          return (
            <div className="ItemActive" style={{ borderBottom: "none", }} key={index}>
              <ImageUser image="{user.image}" width={45} />
              <div className="d-flex flex-column justify-content-center">
                <span>{user.username}</span>
                <span className="statuslogin">{user.status}</span>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};


export default CardActive;