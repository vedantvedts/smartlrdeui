import React, { useEffect, useState } from "react";
import smartURL from "assets/images/smartURL.png";

const MembershipCardHtmlComponent = () => {
  const [base64Image, setBase64Image] = useState(null);

  useEffect(() => {
    const convertImageToBase64 = async () => {
      try {
        const response = await fetch(smartURL);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setBase64Image(reader.result);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error converting smart URL image to Base64:", error);
      }
    };

    convertImageToBase64();
  }, []);


  const membershipHtml = `
   <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMART Membership</title>
</head>
<body class="bg-white text-dark">
    <div class="container membership-card-wrap border border-secondary mt-4" style="padding-right:0!important; padding-left:0!important;" >
        <div class="membership-header  text-white d-flex justify-content-between align-items-center" 
        style="padding-top: 15px;padding-left: 10px;background: linear-gradient(45deg, #3770d1, #3770d1)!important;">
            <div class="h3 font-weight-bold">WITH SMART</div>
        </div>
        <div class="membership-header  text-white  text-center" style="padding-bottom: 20px;background: linear-gradient(45deg, #3770d1, #3770d1)!important;">
            <h1 class="h2 font-weight-bold">You Can Achieve Great Things.</h1>
        </div>
      <div class="p-3 text-start ps-30">
           <h2 class="h2 font-weight-bold" style="color: rgba(55, 112, 209)!important;" >Thank You for Your Membership!</h2>
      </div>

      <div class="row" style="padding-left: 20px;padding-bottom:30px!important;">
  
            <div class="col-md-3">
               <p class="h5" style="color:#18b0f6!important;">You are a member of the Bangalore Section</p>
            </div>
            <div class="col-md-8">
               <p class="h5" style=font-weight:normal!important;">Below is a digital version of your membership card for easy access to your membership information. You can also access this in your SMART profile or in the SMART app anytime!</p>
            </div>
            <div class="col-md-1"></div>
        </div>

 <!-- membership-card-container start -->
  <div class="membership-card-container mt-2" style="max-width: 900px; margin: 0 auto; border: 3px dashed #666;overflow: hidden;padding: 0;position: relative;ox-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <div class="membership-card" style="width: 100%; background-color: white;position: relative;border-radius: 0px;background: #f9f9f9;">
      <div class="row card-row" style="padding:0!important;margin:0!important;">

       <!-- col-md-6 card-front start -->
         <div class="col-md-6 membership-card-front" style="border-right: 3px dashed #666!important;">
               <!-- row start -->
                <div class="row">        
                    <div class="col-md-8 member-info" style="padding: 15px;">
                        <div class="year-tag" style=" position: absolute; top: 0; left: 45%;transform: translateX(-50%);background-color: #006699;color: white;padding: 4px 20px; font-weight: bold;z-index: 10; text-align: center;width: 80px;">2025</div>
                        <div class="member-title" style="font-size: 14px;color: #006699;text-align: left!important;font-weight:500!important;">
                           Member
                        </div>
                        <div class="member-name" style="text-align:left!important;">Reena Sharma, Sc.F</div>
                         <div class="member-details mt-2" style="text-align: left!important;">
                             Member # 98931738<br>
                             Bangalore Section
                         </div>
                          <div class="member-status mt-3" style="text-align: left!important;font-size:15px!important;">
                              SMART Member for 2 years<br>
                              Valid through 31 December 2025
                          </div>
                    </div>   
                    
                    <div class="col-md-4 qr-code mt-5" style="width: 100px;height: 100px;background: transparent!important;" >
                         <!-- QR code container with pixelated pattern -->
                        
                     </div>
                </div>
                <!-- row end -->
                <!-- footer start -->
                  <div class="card-footer" style="display: flex; background-color: #006699;color: white;padding: 10px 0;">
                  
                  
                       <div class="col-md-6 signature-section" style="border-right: 1px solid white;padding: 0 10px;">
                          <div style="height: 15px; width: 70px; background-color: white;"></div>
                          <div style="font-size: 10px;">Somsing Rathod<br>2025 SMART President</div>
                
                        </div>
                         
                 
                     <div class="col-md-6 smart-logo" style="display: flex;align-items: center;justify-content: flex-end;font-size: 12px;text-align: right;">
                            <div>
                               <div class="slogan" style=" font-size: 10px;text-align: right;color: white;">
                                  Society for Microwaves, Antennas and Radar Technologies
                                </div>
                             </div>
                             <div class="logo-circle" style="width: 50px;height: 40px;background-color: white;border-radius: 50%; margin-left: 10px; display: flex; align-items: center;justify-content: center; color: #006699; font-weight: bold;">
                                    SMART
                             </div>
                    </div>
                    
                 </div>
                <!-- footer end -->
         </div>
        <!-- col-md-6 card-front end -->

       <!-- col-md-6 card-back start -->
       <div class="col-md-6">
                <!-- row start -->
                <div class="row ">
                  <div class="col-12">
                     <div class="d-flex justify-content-center pt-3">
                          <div>For membership information visit <span style="color: #006699;"><strong>smartlrde.com</strong></span></div>
                      </div>
                       <div class="row">
                                <div class="membership-details col-md-7 mt-2 mb-4" style="padding: 15px;background-color: #f0f8ff;border-radius: 5px;margin-top: 15px;font-size: 13px;">
                                    SMART promotes the general advancement of educational, 
                                    training and engineering aspects of Microwaves, Antennas, 
                                    Radar Technologies, their allied subjects, and 
                                    their applications.
                                </div>
                                <div class="contact-info col-md-5 mt-2 mb-4" style="font-size: 13px;text-align: left;padding: 10px;">
                                    <strong>SMART Contact Center</strong> :<br>
                                    Dr. SOMSING RATHOD<br>
                                    General Secretary, SMART<br>
                                    9880107412<br>
                                    somsing.rathod.lrde@gov.in
                                </div>
                        </div>
                   </div>
                </div>
                <!-- row end -->
                <!-- footer start -->
                  <div class="card-footer" style="display: flex; background-color: #006699;color: white;padding: 10px 0;" >
                 
                     <div class="col-md-6 address-section" style="padding: 0 10px;">
                        <div style="font-size: 10px;text-align:left;">
                             SMART<br>
                             C V Raman Nagar, Bengaluru<br>
                             Karnataka, 560093
                        </div>
                     </div>
                             <div class="col-md-6 smart-logo" style="display: flex;align-items: center;justify-content: flex-end;font-size: 12px;text-align: right;">
                            <div>
                               <div class="slogan" style=" font-size: 10px;text-align: right;color: white;">
                                  Society for Microwaves, Antennas and Radar Technologies
                                </div>
                             </div>
                             <div class="logo-circle" style="width: 50px;height: 40px;background-color: white;border-radius: 50%; margin-left: 10px; display: flex; align-items: center;justify-content: center; color: #006699; font-weight: bold;">
                                    SMART
                             </div>
                    </div>
                 </div>
                <!-- footer end -->
 
              </div>
               <!-- col-md-6 card-back  end -->


         </div>
      </div>
   </div>

 <!--membership-card-container-->
        


        <div class="mt-3 card-in-details" style="padding-right:20px!important; padding-left:20px!important;">
            <h4 class="h4 font-weight-bold" style="color: rgba(55, 112, 209)!important;">Make the Most of Your Membership.</h4>
            <div class="row mt-3">
                <div class="col-md-4">
                    <h3 class="font-weight-bold">Local SMART Section</h3>
                    <p>Get involved with colleagues at your local SMART Section, who can help connect you to professionals who can advance your goals.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="font-weight-bold">Technical Publications</h3>
                    <p>Take advantage of discounts and access to cutting-edge journals, magazines, and other publications.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="font-weight-bold">Career Opportunities</h3>
                    <p>Drive your career goals forward with online learning, job listings, a consultant’s network, and more.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="font-weight-bold">Professional Network</h3>
                    <p>Build a professional network from the wealth of diversity, expertise, and connections found within SMART.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="font-weight-bold">Local Activities</h3>
                    <p>Through your SMART Section events and conferences there are many ways to become involved.</p>
                </div>
                <div class="col-md-4">
                    <h3 class="font-weight-bold">Humanitarian Programs</h3>
                    <p>Through your local Section and your community, SMART can support your efforts to help improve quality of life.</p>
                </div>
            </div>
        </div>

        <div class="bg-warning text-white text-center p-3 mt-3">
            <p style="color:black">To Learn about these and all SMART member benefits at <a href="https://smartlrde.com/" class="text-white font-weight-bold;" style="color:blue;">SMART Website</a></p>
        </div>

    </div>


  </body>
</html>
  `;

  return <div dangerouslySetInnerHTML={{ __html: membershipHtml }} />;
};


export default MembershipCardHtmlComponent;