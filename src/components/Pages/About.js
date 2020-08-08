import React from "react";
import image from "../../assets/images/about-img.png";
import './About.css'; 


const About = () => (
    <section class="call-out-container">
        <div class="call-out">
            <h1 class="h1text">We Are</h1>
            <p className="Ptext">A highly specialized Management team with over 20 combined
            years of experience in the Healthcare industry with proven
            ability to optimally combine digital technology,
            skilled resources and efficient business processes
            to implement creative as well as proven market solutions
            to suit an ever-evolving market. Our forte has been
            to successfully tailor our solutions
            to support your needs whether
            it is in the space of Consulting,
           Product Management or Service Delivery</p>
           <div class="a"><a href="about-us" class="pg_btn">About Us</a></div>
        </div>
        <div className="call-out">
            <img className="image" src={image} alt="" />
        </div>
    </section>
);

export default About;