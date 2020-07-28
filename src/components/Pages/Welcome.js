import React, { useEffect, useRef } from 'react'
import './Welcome.css'

import About from "./About"
import lottie from "lottie-web";
const Welcome = ({ element }) => {
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
    <main>
      <section className="container-fluid" >
        <div className="row" ref={element}>
        <div className="col-7">
          <div className="welcome--logo" ref={container}></div>
           <p className="text">Even if you scroll, i will stick with you...</p> 
           <div className="Button">
             <button class="Btn one">Hire a Writer</button>
             <button  class="Btn two">Contact Us</button>            
           </div>           
          </div>          
          <div className="col-5"><h1>Hello world</h1></div>
        </div>
      </section>
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
    </main>
  )
}

export default Welcome