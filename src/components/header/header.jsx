import './master.css';
import './header.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For React Router v6
import logo from "../../assets/images/smart2.jpg";
import { IoLogOutSharp } from "react-icons/io5";
import { MdLockReset } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { logout } from "services/auth.service"; 

const HeaderComponent = () => {
  const [showMainHeader, setShowMainHeader] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate(); // For navigation

  const isLoggedIn = localStorage.getItem("user"); // Convert string/null to boolean


  /******* Logout Function ********/
  const handleLogout = (e) => {
    e.preventDefault();
    logout("L");
    navigate("/"); // Redirect to login
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    navigate("/change-password"); // Redirect to login
  };

  const handleDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirect to login
  };
  


  useEffect(() => {
    // Listener for scroll event
    const handleScroll = () => {
      if (isMobileView) {
        const homeSection = document.getElementById("fixed-sub-nav");
        if (homeSection) {
          const homeBottom = homeSection.getBoundingClientRect().top;
          setShowMainHeader(homeBottom > 0);
        }
      }
    };

    // Listener for screen resizing
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  return (
    <>
      {showMainHeader && (
        <header className="header-nav shadow-sm">
          <div className="header-container col-md-12">
            <div className="logo-container col-md-2">
              <img src={logo} alt="logo" className="logo-image" />
            </div>
            <div className="title-container col-md-7">
              <p>Society for Microwaves, Antennas and Radar Technologies</p>
            </div>
            {isLoggedIn && (
  <>
    
    
    <div  className="title-container col-md-3" data-bs-toggle="tooltip" data-bs-placement="top" title="">
      <span className="logoutText"  onClick={handleDashboard}>Dashboard <MdDashboard className="logoutIcon" /></span>&nbsp;
      <span className="logoutText">&nbsp;|&nbsp;&nbsp;</span>
      <span className="logoutText"  onClick={handleChangePassword}>Change Password <MdLockReset className="logoutIcon" /></span>&nbsp;
      <span className="logoutText">&nbsp;|&nbsp;&nbsp;</span>
      <span className="logoutText" onClick={handleLogout}>Log Out   <IoLogOutSharp className="logoutIcon" /></span>&nbsp;
   
    </div>
  </>
)}


          </div>
          <div className="nav-bar-container col-md-12">{/* header */}</div>
        </header>
      )}
      {isMobileView && !showMainHeader && (
        <div className="minimal-header">
          <p>SMART</p>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
