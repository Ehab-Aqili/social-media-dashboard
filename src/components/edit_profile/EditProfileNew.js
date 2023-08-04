import React, {useState, useEffect} from "react";
// import "../../css/login.css";
import "bootstrap/dist/css/bootstrap.css";

import axios from "axios";

const EditProfileNew = () => {
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [location,setlocation]=useState("")
  const [birth_date,setbirth_date]=useState("")
  // handle form submission and display data in console

  const getUser = JSON.parse(sessionStorage.getItem("user"))

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        console.log(getUser.userId)
          // const getId = sessionStorage.getItem("")
          // console.log(getId)
          const res = await axios.get(`http://127.0.0.1:8080/user/profile/${getUser.userId}`)
const name = res.data.username
const array=name.split(" ")
const arrayname=array.filter((name) => name.trim() !== '');
setfirstname(arrayname[0])
setlastname(arrayname[1])
setbirth_date(res.data.birth_date)
setlocation(res.data.location)

  
        } catch (error) {
          console.error('Error fetching data:', error);
       
        }
      };
  
      fetchData(); // Call the function to fetch data

    }, []);
  
 
  const onSubmit = async () => {
    const username = firstname+" "+lastname
    const getId = sessionStorage.getItem("Id")
    console.log(getId)
 await axios.patch(`http://127.0.0.1:8080/user/edit-user/${getUser.userId}`,{username,location,birth_date})

  }

  return (
    <div className="col-lg-12 col-md-6 col-sm-12 register__form">
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={onSubmit} // use handleSubmit to handle form submission
      >
        {/* -----------------------First Row----------------------- */}
      
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
       onChange={e=>{
        setfirstname(e.target.value)
        
       }
      }
      value={firstname}
            />
          
          </div>
          {/* <!-- Last Name --> */}
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={e=>{
                setlastname(e.target.value)
               }}
               value={lastname}
            />
         
          </div>
        </div>

        {/* -----------------------Second Row----------------------- */}
        <div className="row">
          {/* <!-- Birthday --> */}
          <div className="col-md-6 mb-3">
            <label htmlFor="birthday" className="form-label">
              Birthday:
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form-control"
              onChange={e=>{
                setbirth_date(e.target.value)
               }}
               value={birth_date}
         />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              onChange={e=>{
                setlocation(e.target.value)
               }}
               value={location}
            />
         
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <div className={"d-flex justify-content-center mt-3"}>
          <button
            type={"submit"}
            className={"btn btn-primary btn-custom-register text-center w-50"}
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditProfileNew;

