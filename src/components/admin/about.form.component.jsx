import React from "react";
import HeaderComponent from "components/header/header";
import NavbarComponent from "components/header/top.navbar";
import AboutUsComponent from "components/admin/about.component";
import RegisterComponent from "components/admin/register.component";
import LoginComponent from "components/admin/login.component";
import FooterComponent from "components/footer/footer";

import { useEffect, useState } from "react";

const imagesForJoinSmart = [
  require("../../assets/images/joinSmart1.png"),
  require("../../assets/images/joinSmart4.png"),
  require("../../assets/images/joinSmart3.png"),
  require("../../assets/images/joinSmart5.png"),
];


const AboutComponent = () => {
  const [currentJoinUsImage, setCurrentJoinUsImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoinUsImage((prev) => (prev + 1) % imagesForJoinSmart.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imagesForJoinSmart.length]);


    return (
        <>
    <HeaderComponent/> 
    <NavbarComponent/>
    <section  id="fixed-sub-nav" className="vh-100 gradient-background">
     
    <section id="aboutUs" className="py-5">
       <AboutUsComponent/>
    </section>


    <section id="register" className="py-5">
       <div className="container mt-4  pt-4">
             <div className="row align-items-center">
             <div className="col-md-6" style={{marginBottom: 'auto'}}>
              <h2 className="about-title">Join SMART</h2>
              {/*Start Banner component*/}
              <div className="banner-text-image">
                      <div className="banner-overlay"></div>
                         <div className="column-height image-block banner-image-content banner-bg-image mt-4">
                          <img
                         src={imagesForJoinSmart[currentJoinUsImage]}
                           alt="banner"
                               className="banner-img-responsive"
                            />
                           </div>

                            <div className="clearfix"></div>
                          </div>


              {/*End Banner component*/}
              <p className="about-details mt-5 mb-1">
              SMART promotes organizing annual seminars, workshops, and specialized national-level courses, hosting symposiums and workshops, publishing newsletters and e-newsletters, developing a database of experts, facilities, and bibliographic publications, publishing monographs, and instituting fellowships and awards.
              </p>


            </div>
                <div className="col-md-6"> 
                   <RegisterComponent/>
                </div>
             </div>
          </div>
       </section> 

          <section id="register" className="py-5">
         <div className="container">
             <div className="row align-items-center">
                <div className="col-md-6"> 
                   <LoginComponent/>
                </div>
                <div className="col-md-6 mt-3" style={{marginBottom: 'auto'}}>
                <h2 className="about-title">Already have a SMART account? Log in</h2>

               <p className="about-details mt-4">
               As a professional in the fields of microwaves, antennas, and radar technologies, logging into the Society for Microwaves, Antennas and Radar Technologies (SMART) platform provides you with exclusive access to a wealth of resources and opportunities. By becoming a member, you can participate in specialized workshops, receive newsletters, and connect with a network of experts in areas such as RF and microwave engineering, millimeter-wave and terahertz technologies, and radar systems. Engaging with SMART will enhance your professional development and keep you informed about the latest advancements in your field.
                       </p> 
            </div>
                
                </div>
             </div>
      </section> 

 
     <FooterComponent/>


    </section>
 
    </>
    );
};

export default AboutComponent;