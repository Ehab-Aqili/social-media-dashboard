import React from "react";
import CardFriend from "./CardFriend";
import "./friend.css";
const Friends = () => {
  
  const data = JSON.parse(sessionStorage.getItem('user'))
  let newData = []
  newData.push(data)
  // console.log(newData[0].friends)
  return (
    <div className="row d-flex justify-content-center gap-2 p-3">
      {
        newData[0].friends.map((d, index) => {
          return  (
            <CardFriend username={d.username} key={index} />
          )
        })
      }
    </div>
  );
};
export default Friends;
