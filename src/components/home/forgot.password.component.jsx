import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import withRouter from "common/with-router";
import HeaderComponent from "components/header/header";
import NavbarComponent from "components/header/top.navbar";
import { sendOtp } from "services/home.service";

const ForgotPasswordComponent = (props) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    emailId: Yup.string()
      .email("Invalid email format")
      .min(5, "Username must be at least 5 characters")
      .max(100, "Username must not exceed 100 characters")
      .required("Please Enter your Email ID"),
  });

  const handleForgotPasswordSubmit = async (values) => {
    setMessage("");
    setLoading(true);

    try {
      const response = await sendOtp(values.emailId);

      if (response && typeof response === "object" && response.message) {
        const message = response.message.toString();

        if (message.includes("This Email ID does not exist in our records")) {
          setMessage(message);

        }else  if (message.includes("OTP generation failed")) {
          setMessage(message);
        }else  if (message.includes("OTP already sent. Try again after it expires")) {
          setMessage(message);
        } else {
          props.router.navigate("/change-Password");
        }
      } else {
        setMessage("OTP generation failed.");
      }
    } catch (error) {
      let resMessage =
        error.response?.data?.message ||
        (error.response?.status === 401
          ? "OTP generation failed. Unauthorized request."
          : "Unexpected error occurred");

      setMessage(resMessage);
    } finally {
      setLoading(false);
      // Hide the message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <>
      <HeaderComponent />
      <NavbarComponent />

      <section id="fixed-sub-nav" className="vh-100 gradient-background">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-12 mt-2 pt-1">
              <div className="card text-black shadow-lg form-card-login">
                <div className="card-body p-md-5">
                  <p className="text-center h2 fw-bold mb-2 pb-4 form-name">
                    Forgot Password?
                  </p>
                  {/* Error Message Box */}
                  {message && <div className="alert alert-danger error-box">{message}</div>}

                  <Formik
                    initialValues={{ emailId: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleForgotPasswordSubmit}
                  >
                    {({ touched, errors }) => (
                      <Form>
                        {/* Username Field */}
                        <div className="mb-4">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="emailId"
                              name="emailId"
                              className={`form-control ${
                                touched.emailId && errors.emailId ? "is-invalid" : ""
                              }`}
                              placeholder="Email ID"
                            />
                            <label htmlFor="emailId">
                              <i className="fa fa-user icon-input"></i>Username[Email ID]
                              <span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="emailId" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mt-5">
                          <button type="submit" className="btn btn-lg w-100 login-button" disabled={loading}>
                            {loading ? "Processing..." : "Reset Password"}
                          </button>
                        </div>

                        {/* Additional Links */}
                        <p className="text-center mb-4 mt-4">
                          <span>Or return to ? </span>
                          <a href="/login" className="register-link">
                            Log In.
                          </a>
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

export default withRouter(ForgotPasswordComponent);
