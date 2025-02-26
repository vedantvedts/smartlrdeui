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


      const expandNav =() => {
        var element  =  document.getElementById("navbarNavList");
        if(element){
          if(element.style.display === "block"){
            element.style.display = "none";
          }else{
            element.style.display = "block";
          }
        }
      }

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
            {/* <nav className="navbar navbar-expand-lg nav-bar-color">
              <button className="navbar-toggler ms-auto" onClick ={expandNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavList"
                aria-controls="navbarNavList" aria-expanded="false" aria-label="Toggle navigation" style={{}}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse " id="navbarNavList" >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"> <a className="nav-link" href="/"> Home </a> </li>
                  <li className="nav-item"><a className="nav-link" href="/aboutus">  About Us </a></li>
                  <li className="nav-item"><a className="nav-link" href="/register">  Membership </a> </li>
                  <li className="nav-item"><a className="nav-link" href="/login" > Login </a> </li>
                  <li className="nav-item"> <a className="nav-link" href="/contact" > Contact </a></li>
                </ul>
              </div>
            </nav> */}
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