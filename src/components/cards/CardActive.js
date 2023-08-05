import React from "react";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
const CardActive = ({ id }) => {
  const { t } = useTranslation();

  
  const data = JSON.parse(sessionStorage.getItem('user'))
  let newData = []
  newData.push(data)
  console.log(newData[0].friends)
  return (
    <div className="card__active">
      <h5 className="mb-3">{t(KeyLang.active)}</h5>

     { newData[0].friends.map((d, index) =>{
      return (

        <div className="ItemActive" style={{borderBottom: "none"}} key={index}>
       <ImageUser image={d.image}  width={45} />
       <div className="d-flex flex-column justify-content-center">
         <span>{d.username}</span>
         <span className="status__login">online</span>
       </div>
     </div>
      )
      }).slice(0, 4)
    }
    
     
    </div>
  );
};



export default CardActive;
