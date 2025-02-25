import logo from "../../assets/images/smart2.jpg";
import home from "../../assets/images/home.jpg";
import "./dashboard.css";
import { useEffect, useState } from "react";
import HeaderComponent from "components/header/header";
import SideNavbarComponent from "components/header/side.navbar";



import RegisterComponent from "components/admin/register.component";
import LoginComponent from "components/admin/login.component";
import AboutUsComponent from "components/admin/about.component";
import ContactComponent from "components/admin/contact.component";
import FooterComponent from "components/footer/footer";

const imagesForJoinSmart = [
  require("../../assets/images/joinSmart1.png"),
  require("../../assets/images/joinSmart4.png"),
  require("../../assets/images/joinSmart3.png"),
  require("../../assets/images/joinSmart5.png"),
];
const SmartDashboardComponent = () => {

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
       


      <section id="fixed-sub-nav" className="fade-in vh-100">
      <section id="dashboard" className="py-1">

       <SideNavbarComponent/>

          {/* Add your main content here */}
   
   
              

       </section>
   </section>
      {/* <FooterComponent/> */}
    

    </>
  )
}
export default SmartDashboardComponent;