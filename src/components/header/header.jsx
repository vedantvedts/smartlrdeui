import './master.css';
import './header.css';
import React from "react";
import { useEffect, useState } from "react";
import logo from "../../assets/images/smart2.jpg";


const HeaderComponent = () => {

    const [showMainHeader, setShowMainHeader] = useState(true); // State to toggle main header
    const [isMobileView, setIsMobileView] = useState(false);
  
    useEffect(() => {
        // Listener for scroll event
        const handleScroll = () => {
          if (isMobileView) { // Apply scroll logic only in mobile view
            const homeSection = document.getElementById("fixed-sub-nav");
            if (homeSection) {
              const homeBottom = homeSection.getBoundingClientRect().top;
              setShowMainHeader(homeBottom > 0); // Show main header only if "home" is in view
            }
          }
        };
    
        // Listener for screen resizing to toggle mobile view
        const handleResize = () => {
          setIsMobileView(window.innerWidth <= 768); // Mobile view for widths <= 768px
        };
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    
        // Initial check on mount
        handleResize();
    
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
            <div className="title-container col-md-10">
              <p>Society for Microwaves, Antennas and Radar Technologies</p>
            </div>
          </div>


          <div className="nav-bar-container col-md-12" >
          {/* header */}
          </div>
        </header>
      )}
      {isMobileView && !showMainHeader && (
        <div className="minimal-header">
          <p>SMART</p>
        </div>
      )}

</>
  )
}
export default HeaderComponent; 