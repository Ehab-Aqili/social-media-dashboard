import React, { useState } from "react";
import "../css/login.css";
import logoLogin from "../assets/icons/logo-login.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  //   const [email, setEmail] = useState();
  //   const [password, setPass] = useState();
  // console.log(email)
  // console.log(pass)
  const navigate = useNavigate();
  //   const handleEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePass = (e) => {
  //     setPass(e.target.value);
  //   };
  const logIn = async (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email)

    const response = await fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })

    const json = await response.json()
    if (!response.ok) {
      console.log(json.error)
    }
    if (response.ok) {
      console.log(json)
      // navigate("/profile");
    }
    // try {
    //   const response = axios
    //     .post("/user/login", { email, password })
    //     .catch((err) => {
    //       if (err && err.response) {
    //         console.log("Error: ", err.response.data.error);
    //       }
    //     });

    //   const json = await response.json()
    //   console.log(json);

    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="align-items-center">
      <div className="container register__page mt-4">
        <div className="row d-flex align-items-center pt-5 d-flex justify-content-around">
          {/* <!-- image --> */}
          <div className="col-lg-8 col-md-4 col-sm-12 image__register me-4">
            <img src={logoLogin} alt="logoLogin" />
          </div>

          {/* <!-- form --> */}
          <div className="col-lg-4 col-md-6 col-sm-12 register__form">
            <h4>Welcome back to the Link Up</h4>
            <form id="login__form" onSubmit={(e) => logIn(e)}>
              {/* <!-- ------------- *** Email *** ------------- --> */}
              <div className="mb-3 field email-field">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                  //   onChange={handleEmail}
                  //   value={email}
                  name="email"
                />
                <span className="error email-error">
                  Please enter a valid email
                </span>
              </div>

              {/* <!-- ------------- *** Password *** ------------- --> */}
              <div className="mb-3 field password-field">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter your Password"
                  //   onChange={handlePass}
                  //   value={password}
                  name="password"
                />
                <span className="error password-error">
                  Please enter your password
                </span>
                <span className="field email-pass-field">
                  <span className="error email-pass-error"></span>
                </span>
              </div>
              <div className="d-flex justify-content-between fs-6">
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>

                {/* <!-- ------------- *** Forget Password *** ------------- --> */}
                <span className="d-block forget__pass">forget password?</span>
              </div>

              {/* <!-- ------------- *** Button *** ------------- --> */}
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-custom-register text-center w-100"
                // onSubmit={logIn}
                >
                  Sign in
                </button>
              </div>
              <div className="text-center mt-4 text__sign">
                Don’t have an account?
                <Link href="register.html" className="text-decoration-none">
                  Signup Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
