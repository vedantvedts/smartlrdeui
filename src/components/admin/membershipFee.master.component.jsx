import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPlus, FaMinus, FaEdit } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import './membershipFee.css'

const SubscriptionMasterComponent = () => {
  const [memberships, setMemberships] = useState([
    { membershipType: "Lifetime Member", amount: "5000" },
    { membershipType: "SSE Member", amount: "2500" },
    { membershipType: "Annual Member", amount: "1000" },
  ]);

  const [customMembership, setCustomMembership] = useState({ membershipType: "", amount: "" });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddCustomMembership = () => {
    if (!customMembership.membershipType.trim() || !customMembership.amount.trim()) {
      alert("Please enter both Membership Type and Amount");
      return;
    }
    setMemberships([{ ...customMembership }, ...memberships]);
    setCustomMembership({ membershipType: "", amount: "" });
    setShowAddForm(false);
  };

  return (
    <div className="subscription-wrap container">
      <main>
        <div className="subscription-title  mb-0">
          <h1>Membership Fee</h1>
        </div>

        {/* Floating Add Button */}
        <div className="d-flex justify-content-end mb-2">
        <button
           style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white", // Adjust as needed
            border: "none", // Removes default button border
            cursor: "pointer",
          }}
  className={`btn rounded-circle shadow ${showAddForm ? "btn-light-red" : "btn-light-green"}`}

  onClick={() => setShowAddForm(!showAddForm)}
>
  {showAddForm ? <FaMinus color="red" /> : <FaPlus color="green" />}
</button>


        </div>

        {/* Slide-down Add New Membership Form */}
        <div
          className={`row justify-content-center ${showAddForm ? "slide-down" : "d-none"}`}
          style={{ transition: "0.3s ease-in-out" }}
        >
        <div className="col-md-8 mx-auto mb-3">
        <div className="card shadow-sm border-0 p-3">
          <div className="row align-items-center">
                 <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    value={customMembership.membershipType}
                    onChange={(e) => setCustomMembership({ ...customMembership, membershipType: e.target.value })}
                    placeholder="Membership Type"
                  />
                  <label>Membership Type<span className="required-input">*</span></label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    value={customMembership.amount}
                    onChange={(e) => setCustomMembership({ ...customMembership, amount: e.target.value })}
                    placeholder="Amount"
                  />
                  <label>Amount<span className="required-input">*</span></label>
                </div>
              </div>
                  <div className="col-md-2 text-end">
                          <button type="submit" className="btn btn-outline-success">
                            <MdAddCard /> Add
                          </button>
                        </div>


              
            </div>
          </div>
          </div>
        </div>

        {/* Membership List as Cards */}
        <Formik
          initialValues={{ memberships }}
          validationSchema={Yup.object({
            memberships: Yup.array().of(
              Yup.object().shape({
                amount: Yup.number().typeError("Amount must be a number").required("Please enter an amount"),
              })
            ),
          })}
          onSubmit={(values) => {
            setMemberships(values.memberships);
            console.log("Updated Memberships:", values.memberships);
          }}
        >
          {({ values, touched, errors, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="row">
                {values.memberships.map((membership, index) => (
                  <div key={index} className="col-md-8 mx-auto mb-3">
                    <div className="card shadow-sm border-0 p-3">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {/* <h6 className="fw-bold">{membership.membershipType}</h6> */}
                          <div className="form-floating">
                              <Field
                                type="text"
                                name={`memberships[${index}].membershipType`}
                                className="form-control"
                                value={membership.membershipType}
                                readOnly
                                style={{
                                  backgroundColor: "#f0f0f0", // Light grey
                                  cursor: "default", // No pointer
                                }}
                              />
                              <label>Membership Type</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-floating">
                            <Field
                              type="text"
                              name={`memberships[${index}].amount`}
                              className={`form-control ${touched.memberships?.[index]?.amount && errors.memberships?.[index]?.amount ? "is-invalid" : ""}`}
                              placeholder="Amount"
                              onChange={handleChange}
                            />
                            <label>Amount<span className="required-input">*</span></label>
                            <ErrorMessage name={`memberships[${index}].amount`} component="div" className="invalid-feedback" />
                          </div>
                        </div>
                        <div className="col-md-2 text-end">
                          <button type="submit" className="btn btn-outline-primary">
                            <FaEdit /> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default SubscriptionMasterComponent;
