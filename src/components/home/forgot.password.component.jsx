import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import withRouter from "common/with-router";
import HeaderComponent from "components/header/header";
import NavbarComponent from "components/header/top.navbar";
import { sendOtp, verifyOtp, submitResetPassword } from "services/home.service";
import ConfirmationDialog from "components/header/confirmation.dialog";
import { logout } from 'services/auth.service';


const ForgotPasswordComponent = (props) => {

  const { router } = props;
  const { navigate } = router;

   const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [dialogValues, setDialogValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      const [passwordInitialValues, setPasswordInitialValues] = useState({
        newPasswordData: "",
        newPasswordConfirmData: "",
      });
    
    
    const handleDialogClose = () => {
      setOpenConfirmationDialog(false);
      setIsSubmitting(false); // Re-enable submit button
    };
  
  //Forgot Password Form – Collects the user's email and sends an OTP.
  //OTP Verification Form – Allows the user to enter the OTP and verify it.
 // Change Password Form – Appears only when OTP verification is successful.


  const validationSchema = Yup.object().shape({
    emailId: Yup.string()
      .email("Invalid email format")
      .min(5, "Username must be at least 5 characters")
      .max(100, "Username must not exceed 100 characters")
      .required("Please Enter your Email ID"),
  });

  const otpValidationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be a 6-digit number")
      .required("Please enter the OTP"),
  });

  const passwordValidationSchema = Yup.object().shape({
    newPasswordData: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .max(40, "Password must not exceed 40 characters")
    .required("Please enter new password"),
    newPasswordConfirmData: Yup.string()
      .oneOf([Yup.ref("newPasswordData"), null], "Passwords must match")
      .required("Please enter confirm password"),
  });

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };


  
  const handleForgotPasswordSubmit = async (values) => {
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);
  
    try {
      const response = await sendOtp(values.emailId);
      if (response && response.includes("OTP sent successfully")) {
        
        //  setShowLoadingModal(true);
        setOtpSent(true); 
        setEmail(values.emailId);
  
        // setTimeout(() => {
        //   setShowLoadingModal(false);
        // }, 5000); 
        setSuccessMessage(response);
      } else {
        setErrorMessage(response);
      }
    } catch (error) {
      setErrorMessage("Unexpected error occurred");
    } finally {
      setLoading(false);
      setTimeout(() => {
          setErrorMessage("");
          setSuccessMessage("");  // Clear success message as well
      }, 3000);
  }
  
  };
  
  const handleVerifyOtpSubmit = async (values) => {
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);
    try {
      const response = await verifyOtp(email, values.otp.trim());
  
      const cleanedResponse = response.trim().replace(/\s+/g, " "); // Removes extra spaces
  
      if (cleanedResponse.includes("OTP expired")) {
        setErrorMessage("OTP has expired. Please request a new one.");
        setOtpSent(false);
      } else if (cleanedResponse.includes("The OTP entered is valid")) {
        setOtpVerified(true);
        setSuccessMessage(response);
      } else {
        setErrorMessage(response);
      }
    } catch (error) {
      setErrorMessage("Error verifying OTP.");
    } finally {
      setLoading(false);
      setTimeout(() => {
          setErrorMessage("");
          setSuccessMessage("");  // Clear success message as well
      }, 3000);
   }
  
  };

  const handleResetPasswordSubmit = async (values, { setSubmitting, validateForm }) => {
    const errors = await validateForm();
    if (Object.keys(errors).length > 0) {
      setSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setOpenConfirmationDialog(true);
    setDialogValues(values);
  };


  
  const handleResetPasswordDialogConfirm = async () => {
      setOpenConfirmationDialog(false);
      if (isSubmitting) {
        setErrorMessage("");
        setSuccessMessage("");
        setLoading(true);
        try {
          let result = await submitResetPassword(email,dialogValues.newPasswordConfirmData);
          const message = result;
          if (message.includes("Change Password Successful")) {
            setErrorMessage(message);
            setPasswordInitialValues({
              newPasswordData: "",
              newPasswordConfirmData: "",
            });
            // Perform logout and navigate to login after successful password change
            logout("L");
            navigate("/login");
          } else if (message.includes("The new Password is the same as the old password!")) {
            setErrorMessage(message);
          } else {
            setErrorMessage(message);
          }
        } catch (error) {
          let resMessage =
            error.response?.data?.message ||
            (error.response?.status === 401
              ? "OTP generation failed. Unauthorized request."
              : "Unexpected error occurred");
    
              setErrorMessage(resMessage);
            } finally {
              setLoading(false);
              setTimeout(() => {
                  setErrorMessage("");
                  setSuccessMessage("");  // Clear success message as well
              }, 3000);
           }
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
                 
                {errorMessage && <div className="alert alert-danger error-box">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success success-box">{successMessage}</div>}
                
                  {!otpSent && (
                    <Formik initialValues={{ emailId: "" }} validationSchema={validationSchema} onSubmit={handleForgotPasswordSubmit}>
                      {({ touched, errors }) => (
                        <Form>
                           <p className="text-center h2 fw-bold mb-2 pb-4 form-name">Forgot Password?</p>
                          <div className="mb-4">
                            <div className="form-floating">
                              <Field
                                type="text"
                                id="emailId"
                                name="emailId"
                                className={`form-control ${touched.emailId && errors.emailId ? "is-invalid" : ""}`}
                                placeholder="Email ID"
                              />
                              <label htmlFor="emailId">
                                <i className="fa fa-user icon-input"></i>Username[Email ID]
                                <span className="required-input">*</span>
                              </label>
                              <ErrorMessage name="emailId" component="div" className="invalid-feedback" />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-lg w-100 login-button" disabled={loading}>
                            {loading ? "Processing..." : "Reset Password"}
                          </button>
                        </Form>
                      )}
                    </Formik>
                  )}

                  {otpSent && !otpVerified && (
                    <Formik initialValues={{ otp: "" }} validationSchema={otpValidationSchema} onSubmit={handleVerifyOtpSubmit}>
                      {({ touched, errors }) => (
                        <Form>
                         <p className="text-center h2 fw-bold mb-2 pb-4 form-name">OTP Verification</p>

                          <div className="mb-4">
                            <Field
                              type="text"
                              name="otp"
                              className={`form-control ${touched.otp && errors.otp ? "is-invalid" : ""}`}
                              placeholder="Enter OTP"
                              maxLength="6"
                            />
                            <ErrorMessage name="otp" component="div" className="invalid-feedback" />
                          </div>
                          <button type="submit" className="btn btn-primary">Verify OTP</button>
                        </Form>
                      )}
                    </Formik>
                  )}

                  {otpVerified && (
                    <Formik   initialValues={passwordInitialValues} 
                    validationSchema={passwordValidationSchema} 
                    onSubmit={handleResetPasswordSubmit}
                    >
                      {({ touched, errors }) => (
                        <Form>
                            <p className="text-center h2 fw-bold mb-2 pb-4 form-name">Reset Password</p>
                           {/* New Password Field */}
                           <div className="mb-4">
                            <div className="form-floating position-relative">
                              <Field
                                type={showNewPassword ? "text" : "password"}
                                id="newPasswordData"
                                name="newPasswordData"
                                className={`form-control ${
                                  touched.newPasswordData && errors.newPasswordData
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="New Password"
                              />
                              <label htmlFor="newPasswordData">
                                <i className="fa fa-lock icon-input"></i>New Password
                                <span className="required-input">*</span>
                              </label>
                              <span className="password-toggle-icon" onClick={toggleNewPasswordVisibility}>
                                <i className={`fa ${showNewPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                              </span>
                              <ErrorMessage name="newPasswordData" component="div" className="invalid-feedback" />
                            </div>
                          </div>

                          {/* Confirm Password Field */}
                          <div className="mb-4">
                            <div className="form-floating position-relative">
                              <Field
                                type={showConfirmPassword ? "text" : "password"}
                                id="newPasswordConfirmData"
                                name="newPasswordConfirmData"
                                className={`form-control ${
                                  touched.newPasswordConfirmData && errors.newPasswordConfirmData
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Confirm Password"
                              />
                              <label htmlFor="newPasswordConfirmData">
                                <i className="fa fa-lock icon-input"></i>Confirm Password
                                <span className="required-input">*</span>
                              </label>
                              <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                                <i className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                              </span>
                              <ErrorMessage name="newPasswordConfirmData" component="div" className="invalid-feedback" />
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="d-flex justify-content-center mt-5">
                            <button type="submit" className="btn btn-lg w-100 login-button">
                              Reset Password
                            </button>
                          </div>

                          <ConfirmationDialog
                            open={openConfirmationDialog}
                            onClose={handleDialogClose}
                            onConfirm={handleResetPasswordDialogConfirm}
                            title=""
                            message="Confirm password reset?"
                          />
                        </Form>
                      )}
                    </Formik>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showLoadingModal && (
  <div className="loading-overlay">
    <div className="loading-container">
      <div className="loading-header">Processing...</div>
      <div className="loading-body">
        <div className="spinner-border text-primary loading-spinner" role="status"></div>
        <p className="mt-3">Please wait while we send your OTP...</p>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default withRouter(ForgotPasswordComponent);