import logo from "../../assets/images/smart2.jpg";
import home from "../../assets/images/home.jpg";
import "./welcome.css";
import { useEffect, useState } from "react";
import HeaderComponent from "components/header/navbar";
import RegisterComponent from "components/admin/register.component";
import LoginComponent from "components/admin/login.component";
import AboutUsComponent from "components/admin/about.component";
import ContactComponent from "components/admin/contact.component";

const imagesForJoinSmart = [
  require("../../assets/images/joinSmart1.png"),
  require("../../assets/images/joinSmart4.png"),
  require("../../assets/images/joinSmart3.png"),
  require("../../assets/images/joinSmart5.png"),
];
const WelcomeComponent = () => {

  const [currentJoinUsImage, setCurrentJoinUsImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoinUsImage((prev) => (prev + 1) % imagesForJoinSmart.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imagesForJoinSmart.length]);


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
        <AboutUsComponent/>
      </section>


      <section id="register" className="py-5">
         <div className="container">
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

      

      <section id="login" className="py-5">
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

    <section id="contact" className="py-5 fade-in">
     <ContactComponent/>
   </section>
   

    </>
  )
}
export default WelcomeComponent;