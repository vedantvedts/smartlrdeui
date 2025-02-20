import React from "react";
import * as Yup from "yup";
import about from "../../assets/images/smart5.png";



const AboutUsComponent = () => {
  


    return (
        <>

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
        
           

       



       </>
  )
}
export default AboutUsComponent;

