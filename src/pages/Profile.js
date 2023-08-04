import NavBar from "../components/navbar/NavBar";
import CoverProfile from "../components/cover/CoverProfile";
import CardAbout from "../components/cards/CardAbout";
import CardPost from "../components/posts/CardPost";
import CardActive from "../components/cards/CardActive";
import CardMightKnow from "../components/cards/CardMightKnow";
import AddPost from "../components/posts/AddPost";
import { useLocation, useNavigate } from "react-router-dom";
// import useFetchData from "../hooks/useFetchData";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const getUser = JSON.parse(sessionStorage.getItem("user"));

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios
  //         .get(`http://localhost:8080/user/profile/${getUser.userId}`)
  //         .catch((err) => {
  //           if (err && err.response) {
  //             console.log("Errorsss: ", err.response.data);
  //           }
  //         });
  //       if (response && response.data) {
  //         console.log("response from profile data here bby");
  //         console.log("asdasd ", response.data.userId)
  //         sessionStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   fetchUserData();
  // });


  const [userData, setUserData] = useState(getUser);


  

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/user/profile/${getUser.userId}`);
          if (response && response.data) {
            sessionStorage.setItem("user", JSON.stringify(response.data));
            setUserData(response.data); // Update the userData state with the new data
          }

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }, []);









  let index = id == null ? "0" : id;

  return (
    <>
  
      <div className="bodyAllPages">
        <div className="px-lg-4 mx-lg-3">
          <CoverProfile sendData={userData} />
        </div>
        <div className="row mt-3 gap-2 d-flex justify-content-center">
          <div className="col-xl-3 col-lg-4 d-xl-block d-lg-block d-md-none d-sm-none">
            <div className=" d-flex flex-column gap-3">
              <CardAbout id={index} />
              <div className="d-md-flex flex-column gap-3 d-xl-none">
                <CardMightKnow id={index} />
                <CardActive id={index} />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-7 col-md-8 ">
            <div className="d-flex flex-column gap-3">
              <AddPost id={index} />
              <CardPost id={index} />
            </div>
          </div>
          <div className="col-xl-3 d-xl-block d-lg-none d-md-none d-sm-none">
            <div className="d-flex flex-column gap-3">
              <CardMightKnow id={index} />
              <CardActive id={index} />
            </div>
          </div>
        </div>
      </div>
      ){/* } */}
    </>
  );
};

export default Profile;