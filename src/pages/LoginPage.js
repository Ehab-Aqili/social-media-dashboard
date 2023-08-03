import React, { useState } from "react";
import "../css/login.css";
import logoLogin from "../assets/icons/logo-login.svg";

import { useFormik } from 'formik';
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";







const LoginPage = () => {
  const [error, setError] = useState(null)

  let navigate = useNavigate();
  const onSubmit = async (values) => {
    const response = await axios.post('http://localhost:8080/user/login', values).catch((err) => {
      if (err && err.response) {
        console.log("Error: ", err.response.data.message)///////////////////
        setError(err.response.data.message)
      }
    })
    if (response && response.data) {
      // console.log(response.data)
      // const id = response.data.userId;
      const user = response.data;
      // console.log("login", response.data)
      // sessionStorage.setItem("Id", id);
      sessionStorage.setItem("user", JSON.stringify(user));
      // sessionStorage.setItem("user", user);
      navigate('/profile'); //redirect to the profile page
      setError(null)
      formik.resetForm()
    }
  }


  const validationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })



  const handleInputChange = (event) => {
    setError(null)
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
            <span className={error ? 'error' : ''}>{error ? error : ''}</span>
            <form id="login__form" onSubmit={formik.handleSubmit} noValidate>
              {/* <!-- ------------- *** Email *** ------------- --> */}
              <div className="mb-3 field email-field">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={(event) => {
                    formik.handleChange(event);
                    handleInputChange(event);
                  }}
                  value={formik.values.email}
                  name="email"
                  required
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                />
                <span className={formik.touched.email && formik.errors.email ? "error email-error" : ""}>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</span>
                {/* <span className="error email-error">
                  Please enter a valid email
                </span> */}
              </div>

              {/* <!-- ------------- *** Password *** ------------- --> */}
              <div className="mb-3 field password-field">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  onBlur={formik.handleBlur} onChange={(event) => {
                    formik.handleChange(event);
                    handleInputChange(event);
                  }}
                  value={formik.values.password}
                  name="password"
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter your Password"
                />
                <span className={formik.touched.password && formik.errors.password ? "error email-pass-error" : "valid-feedback"}>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</span>
                {/* <span className="error password-error">
                  Please enter your password
                </span> */}
                {/* <span className="field email-pass-field">
                  <span className="error email-pass-error"></span>
                </span> */}
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
                  id="submit"
                  type="submit"
                  className="btn btn-primary btn-custom-register text-center w-100"
                >
                  Sign in
                </button>
              </div>
              <div className="text-center mt-4 text__sign">
                Don’t have an account?
                <Link className='text-decoration-none' to={'/'}> registered!</Link>
                {/* <a href="register.html" className="text-decoration-none">
                  Signup Now
                </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
