import React, { useEffect, useRef } from 'react'
import lottie from "lottie-web";
import "./Services.css";

const Services = () => {
  const container = useRef(null)


  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/images/writer.json')
    })
  }, [])
  return (
    <section className="explorSec">
      <div className="explor-call-out">
        <span className="image" ref={container}></span>
      </div>
      <div className="explor-call-out">
        <h1 className="h1text">Services.</h1>
        <p className="Ptext">We offer customized digital services and scalable operational strategies to prepare your Organization ride through the waves of uncertainty in the form of disruptive technology and government regulations so you can deliver accelerated and cost-effective services for your consumers</p>
        <div class="a" style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}><a href="services" className="pg_btn">Explore Services</a></div>
      </div>
    </section>
  )
}

export default Services;
