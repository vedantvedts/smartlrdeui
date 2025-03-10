import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './register.css';
import ConfirmationDialog from "components/header/confirmation.dialog";
import withRouter from "common/with-router";

import {UserDto,submitRegisterAdd} from "services/home.service"
const RegisterComponent = (props) => {

  const {router } = props;
  const { navigate } = router; 
  const [loginId, setLoginId] = useState("");

  const [initialValues, setInitialValues] = useState({
    name: "",
    phone: "", 
    emailId: "" 
});
const [isLoading, setIsLoading] = useState(false);
const [showLoadingModal, setShowLoadingModal] = useState(false);
const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
const [dialogValues, setDialogValues] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);

const [openSnackbar, setOpenSnackbar] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState("");
const [snackbarSeverity, setSnackbarSeverity] = useState("success");


  
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
      .min(2, "Name must be at least 2 characters long")
      .max(100, "Name cannot exceed 100 characters")
      .required("Please enter your name"),
    
      phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
      .required("Please enter your mobile number"),
    
    emailId: Yup.string()
      .email("Enter a valid email address")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email format")
      .required("Please enter your email"),
  

  });
  

  const handleRegisterSubmit = async (values, { setSubmitting, validateForm }) => {
    // Trigger form validation
    const errors = await validateForm();
    // Check if there are validation errors
    if (Object.keys(errors).length > 0) {
      setSubmitting(false);
      return;
    }
  
    setIsSubmitting(true);
    setOpenConfirmationDialog(true);
    setDialogValues(values);
  };

  // const handleDialogConfirm = async () => {
  //   setOpenConfirmationDialog(false);
  //   if (isSubmitting) {
  //     await submitRegisterForm(dialogValues); 
  //     setIsSubmitting(false); 
  //   }
  // };
  const handleDialogConfirm = async () => {
    setOpenConfirmationDialog(false);
    if (isSubmitting) {
      setIsLoading(true);
      setShowLoadingModal(true); // Show loading popup
      await submitRegisterForm(dialogValues);
      setIsSubmitting(false);
  
      // Redirect after 1 min
      setTimeout(() => {
        setShowLoadingModal(false); // Hide modal before redirect
        navigate("/login", {
          state: {
            snackbarMessage: "Registration successful! Redirecting...",
            snackbarSeverity: "success",
          },
        });
      }, 60000);
    }
  };

  const handleDialogClose = () => {
    setOpenConfirmationDialog(false);
    setIsSubmitting(false); // Re-enable submit button
  };

  
  const handleError = (message) => {
    console.error(message);
    setOpenSnackbar(true);
    setSnackbarMessage(message);
    setSnackbarSeverity("error");
  };


  
  const submitRegisterForm = async (values) => {
    const userDto = new UserDto(
      loginId || "",
      values.emailId,//as username
      "",//password
      values.name,
      values.emailId,//as emailId
      values.phone,
      ""//role
    );

    try {
      let result;
        result = await submitRegisterAdd(userDto);
       
  
      // Ensure result is an object and message is a string
      const message = result && typeof result === "object" && result.message 
                      ? result.message.toString() 
                      : "Unexpected response";
                      
      const snackbarSeverity = message.includes("unsuccessful") ? "error" : "success";
      
      setSnackbarMessage(message);
      setSnackbarSeverity(snackbarSeverity);
      setOpenSnackbar(true);
  
      // Reset form values if adding and result is positive
      if (snackbarSeverity === "success") {
        setInitialValues({
          name: "",
          phone: "", 
          emailId: "" 
        });
      }
  
      navigate("/login", {
        state: {
          snackbarMessage: message,
          snackbarSeverity: snackbarSeverity,
        },
      });
  
    } catch (error) {
      console.error("Error occurred in submitForm:", error);
      setSnackbarMessage("Error submitting designation data");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };



    return (
        <>

              <div className="card text-black shadow-lg form-card-register">
                <div className="card-body p-md-5">
                <p className="text-center h2 fw-bold mb-2 pb-4 form-name">Registration</p>
           

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    enableReinitialize
                    onSubmit={handleRegisterSubmit}
                  >
                  {({ values, touched, errors, setFieldValue }) => (
                      <Form>
                        {/* Name Field */}
                        <div className="mb-3">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
                              placeholder="Name"
                              maxLength={100} 
                              onInput={(e) => {
                                // Allow letters, spaces, hyphens, apostrophes, and periods
                                e.target.value = e.target.value.replace(/[^A-Za-z\s\.\'\-]/g, "");
                              }}
                            />
                            <label htmlFor="name">
                              <i className="fa fa-user  icon-input"></i>Name<span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Mobile No Field */}
                        <div className="mb-3">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="phone"
                              name="phone"
                              className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                              placeholder="Mobile No"
                              maxLength={10} 
                              onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))} // Removes non-numeric characters
                            />
                            <label htmlFor="phone">
                              <i className="fa fa-phone  icon-input"></i>Mobile No<span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                          <div className="form-floating">
                            <Field
                              type="email"
                              id="emailId"
                              name="emailId"
                              className={`form-control ${touched.emailId && errors.emailId ? "is-invalid" : ""}`}
                              placeholder="Email Address"
                              maxLength={100} 
                            />
                            <label htmlFor="emailId">
                              <i className="fa fa-envelope  icon-input"></i>Email Address <span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="emailId" component="div" className="invalid-feedback" />
                          </div>
                        </div>


                          {/* Submit Button */}
                          <div className="d-flex justify-content-center mt-4 pt-3">
                          <button type="submit" className="btn btn-lg w-100 register-button">
                            Register
                          </button>
                        </div>


                        <p className="text-center mb-4 mt-4">
                    Already Registered?{" "}
                    <a href="/login" className="login-link">Please Login</a>
                  </p>

                      </Form>
                    )}
                  </Formik>

                  <ConfirmationDialog
        open={openConfirmationDialog}
        onClose={handleDialogClose}
        onConfirm={handleDialogConfirm}
        title=""
        message="Are you sure to submit?"
      />



              <div className="alert-container">
                <div className="alert-content">
                  <strong>Notice:</strong> After registering, please check your email for your password.
                </div>
              </div>

                </div>
              </div>

              {/* Loading Overlay */}
              {showLoadingModal && (
  <div className="loading-overlay">
    <div className="loading-container">
      <div className="loading-header">Processing...</div>
      <div className="loading-body">
        <div className="spinner-border text-primary loading-spinner" role="status"></div>
        <p className="mt-3">Please wait while we process your registration...</p>
      </div>
    </div>
  </div>
)}


    
       </>
  )
}
export default withRouter(RegisterComponent);

