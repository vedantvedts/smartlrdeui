import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './login.css';
import HeaderComponent from "components/header/header";
import NavbarComponent from "components/header/top.navbar";

const ForgotPasswordComponent = () => {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Username must be at least 5 characters')
      .max(100, 'Username must not exceed 100 characters')
  });

  return (
    <>
 <HeaderComponent/> 
 <NavbarComponent/>
      <section  id="fixed-sub-nav" className="vh-100 gradient-background">
       <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-12  mt-2 pt-1">
              <div className="card text-black shadow-lg form-card-login">
                <div className="card-body p-md-5">
                  <p className="text-center h2 fw-bold mb-2 pb-4 form-name">Forgot Password?</p>
                  <Formik
                    initialValues={{ username: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log("Form submitted with values FOR FORGOT PASSWORD:", values);
                    }}
                  >
                    {({ touched, errors }) => (
                      <Form>
                        {/* Username Field */}
                        <div className="mb-4">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="username"
                              name="username"
                              className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`}
                              placeholder="Username"
                            />
                            <label htmlFor="username">
                              <i className="fa fa-user icon-input"></i>Username[Email ID]<span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                     

                      
                        

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mt-5">
                          <button type="submit" className="btn btn-lg w-100 login-button">
                            Reset Password
                          </button>
                        </div>

                        {/* Additional Links */}
                  
                        <p className="text-center mb-4 mt-4">
                          <span>Or return to  ?  </span>
                          <a href="/login" className="register-link">Log In.</a>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              </div>
          </div>
          </div>
      </section>
   
    </>
  );
};

export default ForgotPasswordComponent;