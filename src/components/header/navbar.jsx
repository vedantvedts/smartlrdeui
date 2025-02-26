import './master.css';
import './header.css';
import React from "react";
import { useEffect, useState } from "react";
import logo from "../../assets/images/smart2.jpg";


const NavbarComponent = () => {

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
  
            <nav className="navbar navbar-expand-lg nav-bar-color">
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
            </nav> 

     

</>
  )
}
export default NavbarComponent; 