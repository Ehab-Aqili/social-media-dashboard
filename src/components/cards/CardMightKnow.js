import React, { useEffect, useState } from "react";
// import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
import axios from "axios";
const CardMightKnow = ({ id }) => {
  const { t } = useTranslation();

  // const data = userData[id];

  const [data, setData] = useState([])
  const me = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://127.0.0.1:8080/user/get-users").then((res) => {
        const newFriends = res.data.user
        const newNewFriends = newFriends.filter((value) => {
          return value.username !== me.username
        })

        setData(newNewFriends);
      })
    }
    fetchData()
  }, [])
  // console.log("data ", data)

  return (
    <div className="card__active">
      <h5 className="mb-3">{t(KeyLang.youMightKnow)}</h5>
      {data.map((d, index) => {
        return (
          <div className="ItemActive" style={{ borderBottom: "none" }} key={index}>
            <ImageUser image={d.image} width={45} />
            <div className="d-flex flex-column justify-content-center">
              <span>{d.username}</span>
            </div>
          </div>
        )
      })}
    </div>
  );
};
// function ItemMightKnow(props) {
//   return (
//     <div className="ItemActive" style={props.style}>
//       <ImageUser image={props.image} width={45} />
//       <div className="d-flex flex-column justify-content-center">
//         <span>{`${props.name} ${props.last}`}</span>
//       </div>
//     </div>
//   );
// }

export default CardMightKnow;
