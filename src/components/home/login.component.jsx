import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './login.css';
import { login} from 'services/auth.service'; 
import config from 'environment/config'; 
import withRouter from "common/with-router";

const LoginComponent = (props) => {

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLoginSubmit = async (values) => {
    setMessage("");
    setLoading(true);

    await login(values.username, values.password).then(
      (response) => {
        if (!response.token) {
          setLoading(false);
          setMessage("Login failed. Please try again.");
          props.router.navigate("/login");
        } else {
          props.router.navigate("/dashboard");
        }
      },
      (error) => {
        let resMessage;
        if (error.response && error.response.status === 401) {
          resMessage = "Username or password is incorrect";
        } else {
          resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
        setLoading(false);
        setMessage(resMessage);

        // Hide the message after 3 seconds
        setTimeout(() => setMessage(""), 2000);
      }
    );
  };



  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Email address must be at least 5 characters')
      .max(100, 'Email addres must not exceed 100 characters')
      .required('Please enter your Email address'),
    password: Yup.string()
      .min(1, 'Password must be at least 1 characters')
      .max(40, 'Password must not exceed 40 characters')
      .required('Please enter your password'),
  });

  return (
    <>

              <div className="card text-black shadow-lg form-card-login">
                <div className="card-body p-md-5">
                  <p className="text-center h2 fw-bold mb-2 pb-4 form-name">Login</p>

                  {/* Error Message Box */}
          {message && (
            <div className="alert alert-danger error-box">{message}</div>
          )}


                  <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleLoginSubmit}
                  >
                    {({ touched, errors }) => (
                      <Form>
                        {/* Username Field */}
                        <div className="mb-4">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="email-id"
                              name="username"
                              className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`}
                              placeholder="Email address"
                            />
                            <label htmlFor="email">
                              <i className="fa fa-user icon-input"></i>Email address<span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                        <div className="form-floating position-relative">
                        <Field
                         type={showPassword ? 'text' : 'password'}
                         id="password"
                         name="password"
                         className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                          placeholder="Password"
                       />
                      <label htmlFor="password">
                              <i className="fa fa-lock icon-input"></i>Password
                              <span className="required-input">*</span>
                     </label>
                     <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                         <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </span>
                     <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>
        
                 </div>

                        

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mt-5">
                          <button type="submit" className="btn btn-lg w-100 login-button">
                            Login
                          </button>
                        </div>

                        {/* Additional Links */}
                        <div className="text-center mt-3">
                        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                      </div>
                  
                        <p className="text-center mb-4 mt-4">
                          <span>Don't have an account?  </span>
                          <a href="/register" className="register-link">Register now.</a>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
   
    </>
  );
};

export default withRouter(LoginComponent);