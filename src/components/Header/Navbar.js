import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";


  
const Navbar = ({ sticky }) => {
  
return (
  <nav className={sticky ? "col-12 navbar-sticky" : "col-12"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1> Stick'Me</h1>
    </div>
    <ul className="navbar--link ">
      <li className="nav-item">
        <a className="nav-link " href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/contact">Contact</a>        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/blog" >Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/pricing" >Pricing</a>
      </li>
    </ul>
  </nav>
)};
export default Navbar;
 