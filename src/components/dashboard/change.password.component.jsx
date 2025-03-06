import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HeaderComponent from "components/header/header";

const ChangePasswordComponent = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters")
      .required("Please enter new password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Please enter confirm password"),
  });

  return (
    <>
      <HeaderComponent />
      <div className="smart-main-content">
      <section id="fixed-sub-nav" className="fade-in vh-100">
        <section id="changePassword" className="py-4 header">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-12 mt-2 pt-1">
              <div className="card text-black shadow-lg form-card-login">
                <div className="card-body p-md-5">
                  <p className="text-center h2 fw-bold mb-2 pb-4 form-name">
                    Change Password?
                  </p>
                  <Formik
                    initialValues={{ newPassword: "", confirmPassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {({ touched, errors }) => (
                      <Form>
                        {/* New Password Field */}
                        <div className="mb-4">
                          <div className="form-floating position-relative">
                            <Field
                              type={showNewPassword ? "text" : "password"}
                              id="newPassword"
                              name="newPassword"
                              className={`form-control ${
                                touched.newPassword && errors.newPassword
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="New Password"
                            />
                            <label htmlFor="newPassword">
                              <i className="fa fa-lock icon-input"></i>New Password
                              <span className="required-input">*</span>
                            </label>
                            <span className="password-toggle-icon" onClick={toggleNewPasswordVisibility}>
                              <i className={`fa ${showNewPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </span>
                            <ErrorMessage name="newPassword" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="mb-4">
                          <div className="form-floating position-relative">
                            <Field
                              type={showConfirmPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              className={`form-control ${
                                touched.confirmPassword && errors.confirmPassword
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="Confirm Password"
                            />
                            <label htmlFor="confirmPassword">
                              <i className="fa fa-lock icon-input"></i>Confirm Password
                              <span className="required-input">*</span>
                            </label>
                            <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                              <i className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </span>
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mt-5">
                          <button type="submit" className="btn btn-lg w-100 login-button">
                            Reset Password
                          </button>
                        </div>

                        {/* Additional Links */}
                        {/* <p className="text-center mb-4 mt-4">
                          <span>Or return to ? </span>
                          <a href="/login" className="register-link">Log In.</a>
                        </p> */}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      </div>
    </>
  );
};

export default ChangePasswordComponent;
