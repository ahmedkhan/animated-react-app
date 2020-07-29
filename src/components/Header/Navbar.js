import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";
import { CSSTransition } from "react-transition-group";
  
const Navbar = ({ sticky }) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  
return (
  <header className={sticky ? "Navbar-main navbar-sticky" : "Navbar-main"}>
      <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1> Stick'Me</h1>
    </div>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
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
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
       <span role='img' aria-label="">🍔</span>
      </button>
    </header>
)};
export default Navbar;
 