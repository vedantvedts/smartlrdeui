import React from "react";
import { FaFacebookF, FaHome, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaSignInAlt, FaUsers } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import './contact.css'

const ContactComponent = () => {
  


    return (
        <>

<div className="container-fluid bg-dark text-light footer fadeIn mt-0"  data-wow-delay="0.1s"  >
        <div className="container ">
          <div className="row g-5">
            {/* Address Section */}
            <div className="col-lg-3 col-md-6" style={{textAlign:'justify'}}>
              <h4 className="text-light mb-4 text-about" >Contact Us</h4>
              <p className="mb-2 about-text"> <i className="fa fa-user me-3"></i>Dr. SOMSING RATHOD, SC F</p>
              <p className="mb-2 about-text"> <i className="fa fa-phone me-3"></i>9880107412</p>
              <p className="mb-2 about-text"> <i className="fa fa-envelope me-3"></i>somsing.rathod.lrde@gov.in</p>
              <div className="d-flex pt-2" style={{textAlign:'justify'}}>
                <a className="btn btn-outline-light btn-social" href="/"><FaFacebookF size={20} color="#1877F2" /></a>
                <a className="btn btn-outline-light btn-social" href="/"><FaXTwitter size={20} /></a>
                <a className="btn btn-outline-light btn-social" href="/"><FaInstagramSquare size={20} /></a>
                <a className="btn btn-outline-light btn-social" href="/"><FaLinkedinIn size={20} color="#0077B5" /></a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" style={{textAlign:'justify'}}>
              <h4 className="text-light mb-4 text-about">Quick Links</h4>
              <nav className="text-uppercase1">
              <ul className="list-unstyled g-mt-minus-10 mb-0">
                <li className="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                  <h4 className="h6 g-pr-20 mb-0">
                  <FaHome />
                <a className="g-color-white-opacity-0_8 g-color-white--hover pl-4" href="/aboutus">About Us</a>
               
              </h4>
                </li>
                <li className="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                  <h4 className="h6 g-pr-20 mb-0">
                  <FaUsers />
                <a className="g-color-white-opacity-0_8 g-color-white--hover" href="/register">Membership</a>
               
              </h4>
                </li>
                <li className="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                  <h4 className="h6 g-pr-20 mb-0">
                  <FaSignInAlt />
                <a className="g-color-white-opacity-0_8 g-color-white--hover" href="/login">Log In</a>
               
              </h4>
                </li>
                <li className="g-pos-rel g-py-10">
                  <h4 className="h6 g-pr-20 mb-0">
                  <FaPhoneAlt/>
                <a className="g-color-white-opacity-0_8 g-color-white--hover" href="/contact">Contact Us</a>
          
              </h4>
                </li>
              </ul>
            </nav>




              {/* <a className="btn btn-link" href="/aboutus"> <FaHome />About Us</a>
              <a className="btn btn-link" href="/register"> <FaUsers />Membership</a>
              <a className="btn btn-link" href="/login"> <FaSignInAlt />Login</a>
              <a className="btn btn-link" href="/contact"> <FaPhoneAlt/>Contact Us</a> */}
            </div>
          </div>
        </div>


      </div>
        
           

       



       </>
  )
}
export default ContactComponent;

