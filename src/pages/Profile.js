import NavBar from "../components/navbar/NavBar";
import CoverProfile from "../components/cover/CoverProfile";
import CardAbout from "../components/cards/CardAbout";
import CardPost from "../components/posts/CardPost";
import CardActive from "../components/cards/CardActive";
import CardMightKnow from "../components/cards/CardMightKnow";
import AddPost from "../components/posts/AddPost";
import { useLocation, useNavigate } from "react-router-dom";
// import useFetchData from "../hooks/useFetchData";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  // const getId = sessionStorage.getItem("Id")
  const getUser = JSON.parse(sessionStorage.getItem("user"))


  console.log(getUser)
  // console.log(getUser.userId)
  // console.log(getUser.token)
  // console.log(getId.user.username)
  // const token = sessionStorage.getItem('user').token
  // const url = `http://localhost:8080/user/profile/${getUser.userId}`;
  // if (getUser.id === null && url.err) {
  //    console.log(url)
  //   navigate('/login');
  // }
  useEffect(() => {
    // const fetchUserData = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/users/profile/${location.state.id}`, {
    //             headers: {
    //                 Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yjk4ZTBlYzQ1MzEyMjAyYmNjYzA5NiIsImlhdCI6MTY4OTg4NDQ4OH0.E2HIQFkWHpmWs70VJe7IgnT9z554STsIBZm56oKBT0E',
    //             }
    //         });
    //         setUserName(response.data.user.username);
    //         setUserEmail(response.data.user.email);
    //         // console.log(response.data.data.username)
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     }
    // };
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/profile/${getUser.userId}`, {
          headers: {
            Authorization: `bearer ${getUser.token}`,
          }
        }).catch((err) => {
          if (err && err.response) {
            // console.log("Error: ", err.response.data.error)`
            console.log("Errorsss: ", err.response.data)
            navigate('/login'); //redirect to the profile page
          }
        });
        if (response && response.data) {
          console.log("response from profile data here bby")
          // setUserName(response.data.user.username);
          // setUserEmail(response.data.user.email);
          // console.log(typeof(response.data.userId))
        }
        // console.log(response.data.data.username)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  })


  // function localData() {
  //   const value = JSON.parse(localStorage.getItem("user"));
  //   if (value.status === "login") {
  //     let email = value.email;
  //     // console.log(email);
  //     return email;
  //   }
  // }
  // const email = localData();
  // const { data, loading, error } = useFetchData(url, email);
  // const { data, loading, error } = useFetchData(url, getUser.token);

  let index = id == null ? "0" : id;

  
  return (
    <>
      {/* {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && ( */}
        <div className="bodyAllPages">
          <div className="px-lg-4 mx-lg-3">
           
            <CoverProfile sendData={getUser} />
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
      )
      {/* } */}
    </>
  );
};

export default Profile;
