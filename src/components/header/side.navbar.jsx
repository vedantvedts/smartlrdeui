import React, { useState } from "react";
import "./side.navbar.css";
import HeaderComponent from "components/header/header";
import AboutUsComponent from "components/admin/about.component";
import ProfileFormComponent from "components/profile/profile.component";
import SubscriptionComponent from "components/subscription/subscription.component"
import { logout } from "../../services/auth.service";
import {FaAtom,FaListUl,FaUser,FaIdCard,FaBox,FaFileImport     } from "react-icons/fa";

const SideNavbarComponent = () => {
  const [activeTab, setActiveTab] = useState("profile"); // Set "profile" as default
      const [isMobileView, setIsMobileView] = useState(false);

  return (



        
    
    <div className="container-fluid pt-2">
  
      <div className="row">

        <div className="col-md-1">
          <ul className="nav nav-pills flex-column tabs-left">

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "subscription" ? "active" : ""}`}
                onClick={() => setActiveTab("subscription")}
              >
                Subscription
              </button>
            </li>
            {/* <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "master" ? "active" : ""}`}
                onClick={() => setActiveTab("master")}
              >
                Master
              </button>
            </li> */}
 
    
          </ul>
        </div>

        <div className="col-md-11">
          <div className="tab-content">
         
            {activeTab === "profile" &&   <div className="fade-in-sidebar-content"><ProfileFormComponent/></div>}
            {activeTab === "subscription" &&   <div className="fade-in-sidebar-content"><SubscriptionComponent/></div>}
            {/* {activeTab === "master" &&  <div className="fade-in-sidebar-content"></div>} */}
          </div>
        </div>
      </div>
    </div>
   





  );
};

export default SideNavbarComponent;


  // const [isActive, setIsActive] = useState(false);

  // const toggleSidebar = () => {
  //   setIsActive(!isActive);
  // };

    // <div className={`sidebar ${isActive ? "active" : ""}`}>
         
    //       <div className="top">
    //          <div className="logo">
    //             <i><FaAtom/></i>
    //             <span>&nbsp;SMART</span>
    //          </div>
    //          <i id="btn" onClick={toggleSidebar}><FaListUl /></i>
    //       </div>

     
    //       <ul>
    //       <li> 
    //            <a href="#">
    //             <i className="sidebar-menu-icon" ><FaUser/></i>
    //             <span className="nav-item">&nbsp;Profile</span>
    //           </a>
    //           <span className="tooltip">Profile</span>
    //       </li>
    //       <li> 
    //            <a href="#">
    //             <i className="sidebar-menu-icon" ><FaIdCard/></i>
    //             <span className="nav-item">&nbsp;Subscription</span>
    //           </a>
    //           <span className="tooltip">Subscription</span>
    //       </li>
    //       <li> 
    //            <a href="#">
    //             <i className="sidebar-menu-icon" ><FaFileImport /></i>
    //             <span className="nav-item">&nbsp;Logout</span>
    //           </a>
    //           <span className="tooltip">Logout</span>
    //       </li>

    //       </ul>


    //     </div>



