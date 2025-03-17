import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HeaderComponent from "components/header/header";
import { submitChangePassword } from 'services/dashboard.service';
import ConfirmationDialog from "components/header/confirmation.dialog";
import withRouter from "common/with-router";
import { logout } from 'services/auth.service';

const ChangePasswordComponent = (props) => {
  const { router } = props;
  const { navigate } = router;

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [dialogValues, setDialogValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [failureMessage, setFailureMessage] = useState("");
  const [initialValues, setInitialValues] = useState({
    newPasswordData: "",
    newPasswordConfirmData: "",
  });

  const handleDialogClose = () => {
    setOpenConfirmationDialog(false);
    setIsSubmitting(false); // Re-enable submit button
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const validationSchema = Yup.object().shape({
    newPasswordData: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .max(40, "Password must not exceed 40 characters")
      .required("Please enter new password"),
    newPasswordConfirmData: Yup.string()
      .oneOf([Yup.ref("newPasswordData"), null], "Passwords must match")
      .required("Please enter confirm password"),
  });

  const handleChangePasswordSubmit = async (values, { setSubmitting, validateForm }) => {
    const errors = await validateForm();
    if (Object.keys(errors).length > 0) {
      setSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setOpenConfirmationDialog(true);
    setDialogValues(values);
  };

  const handleDialogConfirm = async () => {
    setOpenConfirmationDialog(false);
    if (isSubmitting) {
      setIsLoading(true);
      setFailureMessage(""); // Clear any previous message
      try {
        let result = await submitChangePassword(dialogValues.newPasswordConfirmData);
        const message = result;
        if (message.includes("Change Password Successful")) {
          setFailureMessage(message);
          setInitialValues({
            newPasswordData: "",
            newPasswordConfirmData: "",
          });
          // Perform logout and navigate to login after successful password change
          logout("L");
          navigate("/login");
        } else if (message.includes("The new Password is the same as the old password!")) {
          setFailureMessage(message);
        } else {
          setFailureMessage(message);
        }
      } catch (error) {
        let resMessage =
          error.response?.data?.message ||
          (error.response?.status === 401
            ? "OTP generation failed. Unauthorized request."
            : "Unexpected error occurred");
  
        setFailureMessage(resMessage);
      } finally {
        setIsLoading(false);
        // Hide the message after 1 second (1000 milliseconds)
        setTimeout(() => setFailureMessage(""), 3000);
      }
    }
  };
  
  
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

                    {/* Error Message Box */}
                    {failureMessage && <div className="alert alert-danger error-box">{failureMessage}</div>}

                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleChangePasswordSubmit}
                    >
                      {({ touched, errors }) => (
                        <Form>
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
                            onConfirm={handleDialogConfirm}
                            title=""
                            message="Confirm password change?"
                          />
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

export default withRouter(ChangePasswordComponent);
