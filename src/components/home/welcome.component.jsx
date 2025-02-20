import logo from "../../assets/images/smart2.jpg";
import home from "../../assets/images/home.jpg";
import about from "../../assets/images/smart5.png";
import { FaFacebookF, FaHome, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaSignInAlt, FaUsers } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import "./welcome.css";
import { useEffect, useState } from "react";
import HeaderComponent from "components/header/navbar";
import LoginComponent from "components/admin/login.component";
import RegisterComponent from "components/admin/register.component";

const WelcomeComponent = () => {

  


  return (
    <>
     <HeaderComponent />

      <section id="fixed-sub-nav" className="fade-in">
        {/* Blog Section */}
        <div className="blog-section text-center text-light" style={{ backgroundImage: `url(${home})` }} >
          <div className="container">
            <h1 className="pt-2">Welcome to SMART</h1>
            <p>
              Join us as we explore the cutting-edge advancements in microwave,
              antenna, and radar technologies. Our community of experts is
              dedicated to fostering innovation, education, and collaboration.
            </p>
          </div>
        </div>

        {/* Events Section */}
        <div id="events" className="py-2 fade-in">
          <div className="container">
            <div className="row">
              {/* Events Column */}


              <div className="col-lg-6 mb-4 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                <h1 style={{ textAlign: 'left' }}>Society for Microwaves, Antennas and Radar Technologies</h1>
                <p style={{ textAlign: 'justify' }}>
                  IRSI Committee proposed SMART team to promote the general advancement of educational, training and engineering
                  aspects of Microwaves, Antennas, Radar Technologies, their allied subjects, and their applications. SMART may
                  facilitate the exchange of information and ideas on these subjects amongst the members of the Society. Further
                  to this, it has been advised to undertake other activities that will further the objectives and aims of the
                  Society and promote advancement in Microwaves, Antennas, and Radar Technologies and their allied subjects. The
                  committee also advised reviving activities of IRSI to make Microwave, Antennas, and Radar Technologies more
                  popular in the country through SMART. Proposed to start SMART Membership drives with immediate effect.
                </p>
              </div>

              {/* About SMART Column */}
              <div className="col-lg-6 mb-4 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
                <div className="card border border-primary">
                  <div className="card-header" style={{ backgroundColor: "#2B547E" }}>
                    <h5 className="text-white">Event Notice</h5>
                  </div>
                  <div className="card-body">
                    <div className="event-marquee-container">
                      <div className="event-marquee-content">
                        <div className="event-item mb-3">
                          <h5 className="event-title">SMARTINDIA</h5>
                          <p className="event-description">
                            The IVC23 event is scheduled to take place in Sydney, Australia from 15-19 September 2025.{" "}
                            <a href="/" target="_blank" rel="noopener noreferrer">Main website</a>
                            <br />
                            <b>Conference Flyer:</b>{" "}
                            <a href="/" target="_blank" rel="noopener noreferrer">(Click here to download)</a>
                          </p>
                        </div>

                        <div className="event-item mb-3">
                          <h5 className="event-title">SMARTLRDE 2024 Announcement</h5>
                          <p className="event-description">
                            <b>Click here to download:</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 fade-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6"> <img src={about} alt="SMART Committee" className="img-fluid rounded" /></div>
            <div className="col-md-6" style={{marginBottom: 'auto'}}>
              <h2 className="about-title">About the SMART</h2>
              <p className="about-details">
                IRSI Committee proposed SMART team to promote the general advancement of educational, training and engineering aspects of Microwaves, Antennas, Radar Technologies, their allied subjects and
                their applications. SMART may facilitate the exchange of information and ideas on these subjects amongst the members of the Society. Further to this, it has been advised to undertake other
                activities that will further the objectives and aims of the Society and promote advancement in Microwaves, Antennas and Radar Technologies and their allied subjects. The committee also advised
                for reviving activities of IRSI to make Microwave, Antennas and Radar Technologies more popular in the country through SMART.
              </p>
            </div>
          </div>
        </div>
      </section>




{/* 
      <section id="register" className="py-5">
      <RegisterComponent/>
      </section> */}

      <section id="login" className="py-5">


      {/* <div className="col-xs-12 col-sm-6">
       <div className="cta-button"><br/>
          <a style={{color:'rgb(227,114,34);background', borderStyle: 'solid', bordeWidth : '2.0px', borderColor : 'rgb(227,114,34)'}}  class="btn-style" href="/register" target="_self">Join now</a>
       </div>
     </div> */}





      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-12">
       
        {/* <LoginComponent/> */}
          </div>

          {/* <div className="col-md-6 "> */}
      
            {/* <div className="login-container p-4 rounded shadow">
              <h2 className="login-title text-center mb-4">Login to SMART</h2>

              <form> 
                <div className="mb-3" style={{ textAlign: "left" }}>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control username" id="username" placeholder="Enter your username" required />
                    </div>
                    
                    <div className="mb-3" style={{ textAlign: "left" }}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                    </div>
                    
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                    </div>
                
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    
                    <div className="text-center mt-3">
                    <a href="#" className="text-muted">Forgot Password?</a>
                    </div>
                
                    <div className="text-center mt-3">
                    <p className="text-muted">Don't have an account? <a href="/register" className="text-primary">Sign up</a></p>
                    </div>
              </form>

            </div> */}
          {/* </div> */}
          
        </div>
      </div>
    </section>

    <section id="contact" className="py-5 fade-in">
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
              <a className="btn btn-link" href="/"> <FaHome />  About Us</a>
              <a className="btn btn-link" href="/register"> <FaUsers />  Membership</a>
              <a className="btn btn-link" href="/login"> <FaSignInAlt /> Login</a>
              <a className="btn btn-link" href="/"> <FaPhoneAlt/>  Contact Us</a>
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
</section>

    </>
  )
}
export default WelcomeComponent;