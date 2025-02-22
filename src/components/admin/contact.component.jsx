import React from "react";
import { FaFacebookF, FaHome, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaSignInAlt, FaUsers } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';


const ContactComponent = () => {
  


    return (
        <>

<div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: "6rem" }} >
        <div className="container py-5">
          <div className="row g-5">
            {/* Address Section */}
            <div className="col-lg-3 col-md-6" style={{textAlign:'justify'}}>
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

            <div className="col-lg-3 col-md-6" style={{textAlign:'justify'}}>
              <h4 className="mb-4 text-about">Quick Links</h4>
              <a className="btn btn-link" href="/aboutus"> <FaHome />  About Us</a>
              <a className="btn btn-link" href="/register"> <FaUsers />  Membership</a>
              <a className="btn btn-link" href="/login"> <FaSignInAlt /> Login</a>
              <a className="btn btn-link" href="/contact"> <FaPhoneAlt/>  Contact Us</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="" href="/" style={{ textDecoration: 'none' }}> SMART @ </a> All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end"> Designed By Vedant Tech Solutions </div>
            </div>
          </div>
        </div>
      </div>
        
           

       



       </>
  )
}
export default ContactComponent;

