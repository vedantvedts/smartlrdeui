import React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import './login.css';
import { FaFacebookF, FaHome, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaSignInAlt, FaUsers } from "react-icons/fa";

import ContactComponent from "components/admin/contact.component";
import FooterComponent from "components/footer/footer";
import HeaderComponent from "components/header/header";
import NavbarComponent from "components/header/navbar";
import { FaXTwitter } from 'react-icons/fa6';


const ContactFormComponent = () => {
  return (
    <>
       <HeaderComponent/> 
       <NavbarComponent/>
      <section  id="fixed-sub-nav" className="gradient-background vh-100 " style={{paddingBottom:'30px'}}>
       <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6   ">
          <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: "2rem" }} >
          <div className="container ">
                       <div className="row g-5">
                         {/* Address Section */}
                         <div className="" style={{textAlign:'justify'}}>
                           <h4 className="text-light mb-4 text-about" >Contact Us</h4>
                           <p className="mb-2 about-text"> <i className="fa fa-user me-3"></i>Dr. SOMSING RATHOD, SC F</p>
                           <p className="mb-2 about-text"> <i className="fa fa-phone me-3"></i> 9880107412</p>
                           <p className="mb-2 about-text"> <i className="fa fa-envelope me-3"></i>somsing.rathod.lrde@gov.in</p>
                           <div className="d-flex pt-2" style={{textAlign:'justify'}}>
                             <a className="btn btn-outline-light btn-social" href="/"><FaFacebookF size={20} color="#1877F2" /></a>
                             <a className="btn btn-outline-light btn-social" href="/"><FaXTwitter size={20} /></a>
                             <a className="btn btn-outline-light btn-social" href="/"><FaInstagramSquare size={20} /></a>
                             <a className="btn btn-outline-light btn-social" href="/"><FaLinkedinIn size={20} color="#0077B5" /></a>
                           </div>
                         </div>
                         </div>
                         </div>
             </div>
             </div>
          </div>
        </div>
      </section>
      <FooterComponent/>
      


    </>
  );
};

export default ContactFormComponent;