import React from "react";
import { FaArrowUp,FaFacebookF, FaHome, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaSignInAlt, FaUsers } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import './footer.css'

const FooterComponent = () => {

   
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    
    return (
        <>
        <div className="navFooter">
        <a href="javascript:void(0)" id="navBackToTop" aria-label="Back to top" onClick={scrollToTop}>
          <div className="navFooterBackToTop">
            <span className="navFooterBackToTopText">
              Back to top&nbsp;<FaArrowUp className="backToTopIcon" />
            </span>
          </div>
        </a>

        <div className="navFooterVerticalColumn col-md-12" data-wow-delay="0.1s">
          <div className="navFooterVerticalRow">
            <div className="col-md-3"></div>
            <div className="navFooterLinkCol col-md-3">
              <div className="navFooterColHead" role="heading" aria-level="6">
                Contact Us
              </div>
              <ul>
                <li className="nav_first">
                  <a className="nav_a">Dr. SOMSING RATHOD, SC F</a>
                </li>
                <li>
                  <a className="nav_a">9880107412</a>
                </li>
                <li className="nav_last">
                  <a className="nav_a">somsing.rathod.lrde@gov.in</a>
                </li>
              </ul>
            </div>

            <div className="navFooterLinkCol col-md-3">
              <div className="navFooterColHead" role="heading" aria-level="6">
                Quick Links
              </div>
              <ul>
                <li className="nav_first">
                  <a className="nav_a" href="/aboutus">About Us</a>
                </li>
                <li>
                  <a className="nav_a" href="/register">Membership</a>
                </li>
                <li className="nav_last">
                  <a className="nav_a" href="/login">Log In</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <div className="navFooterCopyright">
          <ul>
            <li className="nav_first">
              <a id="" className="nav_a">© SMART @All Right Reserved</a>
              <br />
              <span className="navFooterCopyrightSpan">Developed By Vedant Tech Solutions</span>
            </li>
          </ul>
        </div>
      </div>
</>
  )
}
export default FooterComponent; 