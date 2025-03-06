import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SelectPicker from "components/selectpicker/selectPicker";

const SubscriptionMasterComponent = () => {
  const validationSchema = Yup.object().shape({
    membershipType: Yup.string().required("Please select Membership Type"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Please enter an amount"),
  });

  const membershipOptions = [
    { label: "Lifetime Member", value: "Lifetime Member" },
    { label: "SSE Member", value: "SSE Member" },
    { label: "Annual Member", value: "Annual Member" },
  ];

  return (
    <div className="subscription-wrap">
      <main>
        <div className="subscription-title">
          <h1>Tariff Master</h1>
          <p></p>
        </div>
        <div className="subscription-container">
          <Formik
            initialValues={{ membershipType: "", amount: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ touched, errors, values, setFieldValue }) => (
             <Form style={{ width: "100%", maxWidth: "100%" }}>
         <div className="row col-md-12 mt-5 mb-5">

                <div className="col-md-2"></div>
                  <div className="col-md-4">
                    <SelectPicker
                      options={membershipOptions}
                      value={membershipOptions.find((opt) => opt.value === values.membershipType) || ""}
                      handleChange={(selectedOption) => setFieldValue("membershipType", selectedOption?.value || "")}
                      label="Membership Type"
                      required={true}
                      error={touched.membershipType && errors.membershipType ? errors.membershipType : ""}
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="form-floating">
                      <Field
                        type="text"
                        id="amount"
                        name="amount"
                        className={`form-control ${touched.amount && errors.amount ? "is-invalid" : ""}`}
                        placeholder="Amount"
                      />
                      <label htmlFor="amount">Amount<span className="required-input">*</span></label>
                      <ErrorMessage name="amount" component="div" className="invalid-feedback" />
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
                <div className="d-flex justify-content-center" style={{ marginTop: "10rem" }}>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionMasterComponent;
