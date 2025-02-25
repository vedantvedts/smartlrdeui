import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./subscription.css"

const validationSchema = Yup.object().shape({
  membershipType: Yup.string().required("Please select Membership Type"),
});


const membershipType = ["Lifetime Member", "SSE Member", "Annual Member"];

const ProfileFormComponent = () => {
  
  return (
    <section id="fixed-sub-nav" className="gradient-background vh-100" style={{ paddingBottom: "30px" }}>
      <div className="container">
        <div className="card text-black shadow-lg ">

        <div className="subscription-wrap">
            <main>
                <div className="subscription-title">
                    <h1>Membership Plan</h1>
                    <p>Unlock new opportunities and be part of something bigger—join today! 
                        <br/></p>
                        {/* Elevate your journey with the right membership. */}
                </div>
                <div className="subscription-container">
                    
                <div className="subscription-card">
                        <div className="subscription-card-wrapper">
                            <h1>Lifetime Member</h1>
                            <ul className="subscription-ul">
                               <li className="subscription-li">Enjoy lifelong access to exclusive events, workshops, and networking opportunities.</li>
                                <li className="subscription-li">Gain recognition and contribute to the community with a lifetime membership.</li>
                               
                           
                            </ul>
                            <div className="subscription-list-price">
                                <h1 style={{ letterSpacing: "1px", wordSpacing: "2px" }}>₹5,000</h1>
                            </div>
                            <a href="#" className="subscription-btn ">Choose</a>
                        </div>
                    </div>
                    
                    <div className="subscription-card">
                        <div className="subscription-card-wrapper">
                            <h1>SSE Member</h1>
                            <ul className="subscription-ul">
                                <li className="subscription-li">Access specialized symposiums and seminars tailored to industry advancements.</li>
                                <li className="subscription-li">Stay connected with experts and collaborate on innovative projects.</li>
                            
                              
                                
                            </ul>
                            <div className="subscription-list-price">
                                <h1 style={{ letterSpacing: "1px", wordSpacing: "2px" }}>₹4,000</h1>
                            </div>
                            <a href="#" className="subscription-btn ">Choose</a>
                        </div>
                    </div>

                    <div className="subscription-card">
                        <div className="subscription-card-wrapper">
                            <h1>Annual Member</h1>
                            <ul className="subscription-ul">
                                <li className="subscription-li">Get year-round access to resources, newsletters, and expert insights.</li>
                                <li className="subscription-li">Participate in exclusive training sessions and workshops to enhance your skills.</li>
                            
                              
                              
                            </ul>
                            <div className="subscription-list-price">
                            <h1 style={{ letterSpacing: "1px", wordSpacing: "2px" }}>₹3,000</h1>
                          </div>
                            <a href="#" className="subscription-btn ">Choose</a>
                        </div>
                    </div>

 

                </div>
            </main>
            <br/>
            <br/>
        </div>




          {/* <div className="card-body p-md-5">
            <p className="text-center h2 fw-bold mb-1 pb-1 form-name">Your Subscription</p>
           


           <br></br>
           <br></br>
           <br></br>
        
           <div className="col-md-3">
            <Formik
              initialValues={{membershipType: "" }}
              validationSchema={validationSchema}
              onSubmit={() => {}}
            >
              {({ values }) => (
                <Form>
 

                 <div className="row">
                  <div className="mb-4" >
                  
                      <div className="form-floating">
                        <Field as="select" id="membershipType" name="membershipType" className="form-control">
                          <option value="">Select</option>
                          {membershipType.map((membershipType, index) => (
                            <option key={index} value={membershipType}>{membershipType}</option>
                          ))}
                        </Field>
                        <label htmlFor="membershipType">Membership Type<span className="required-input">*</span></label>
                        <ErrorMessage name="membershipType" component="div" className="invalid-feedback" />
                      </div>
                  
                  </div>
                  </div>
                </Form>
              )}
            </Formik>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProfileFormComponent;
