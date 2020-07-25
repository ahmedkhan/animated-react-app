import React,{ useRef } from 'react'

import './Welcome.css'
import Logo from '../../assets/images/logo.svg'
import About from './About'

const Welcome = () => {
    

    
    return (
            <main>
                <section className='welcome'>
                    <div>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <p>Even if you scroll, i will stick with you</p>
                        <button className='welcome__cta-primary'>
                            Contact us
                        </button>
                    </div>
                </section>
                <About />
                <About />
                <About />
            </main>
    )
}

export default Welcome