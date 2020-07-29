import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";

  
const Navbar = ({ sticky }) => {
  
return (
  <nav className={sticky ? "Navbar-main navbar-sticky" : "Navbar-main"}>     
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1> Stick'Me</h1>
    </div>    
    <ul className="navbar--link ">
      <li class="nav-item">
        <a class="nav-link " href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/contact">Contact</a>        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/blog" >Blogs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pricing" >Pricing</a>
      </li>
    </ul>
   
  </nav>
)};
export default Navbar;
 