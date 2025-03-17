import React from "react";
import HeaderComponent from "components/header/header";
import NavbarComponent from "components/header/top.navbar";
import AboutUsComponent from "components/home/about.component";
import RegisterComponent from "components/home/register.component";
import LoginComponent from "components/home/login.component";
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




  

 
     <FooterComponent/>


    </section>
 
    </>
    );
};

export default AboutComponent;