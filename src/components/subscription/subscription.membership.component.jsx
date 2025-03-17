import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./subscription.css";


const validationSchema = Yup.object().shape({
  membershipType: Yup.string().required("Please select Membership Type"),
});





const membershipType = ["Lifetime Member", "SSE Member", "Annual Member"];

const SubscriptionFormComponent = () => {
  
  return (




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
                            <h1 className="subscription-card-name">Lifetime Member</h1>
                            <ul className="subscription-ul">
                               <li className="subscription-li">Enjoy lifelong access to exclusive events, workshops, and networking opportunities.</li>
                                <li className="subscription-li">Gain recognition and contribute to the community with a lifetime membership.</li>
                               
                           
                            </ul>
                            <div className="subscription-list-price">
                                <h1  className="subscription-card-price">₹5,000</h1>
                            </div>
                            <a href="#" className="subscription-btn ">Subscribe</a>
                        </div>
                    </div>
                    
                    <div className="subscription-card">
                        <div className="subscription-card-wrapper">
                            <h1  className="subscription-card-name">SSE Member</h1>
                            <ul className="subscription-ul">

                            <li className="subscription-li">A 50% discount may be offered for SEE members.</li>
                                <li className="subscription-li">Access specialized symposiums and seminars tailored to industry advancements.</li>
                                <li className="subscription-li">Stay connected with experts and collaborate on innovative projects.</li>
                            
                              
                                
                            </ul>
                            <div className="subscription-list-price">
                                <h1  className="subscription-card-price" >₹2,500</h1>
                            </div>
                            <a href="#" className="subscription-btn ">Subscribe</a>
                        </div>
                    </div>

                    <div className="subscription-card">
                        <div className="subscription-card-wrapper">
                            <h1  className="subscription-card-name">Annual Member</h1>
                            <ul className="subscription-ul">
                                <li className="subscription-li">Get year-round access to resources, newsletters, and expert insights.</li>
                                <li className="subscription-li">Participate in exclusive training sessions and workshops to enhance your skills.</li>
                            
                              
                              
                            </ul>
                            <div className="subscription-list-price">
                            <h1 className="subscription-card-price">₹1,000</h1>
                          </div>
                            <a href="#" className="subscription-btn ">Subscribe</a>
                        </div>
                    </div>

 

                </div>
            </main>
            <br/>
            <br/>
        </div>



  );
};

export default SubscriptionFormComponent;
