import React, { useEffect, useRef } from 'react';
import lottie from "lottie-web";
import './Pricing.css';


const Pricing = () => {
    const done = useRef(null)
    const rating = useRef(null)
    const phd = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: done.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/images/done.json')
        })

        lottie.loadAnimation({
            container: rating.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/images/rating.json')
        })

        lottie.loadAnimation({
            container: phd.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/images/phd.json')
        })

    }, [])

    return (
        <section className="cms-banner-container">
            <div className="cms-call-out">
                <div className="__heading-container">
                    <h1>Avail best assignment writing services in USA</h1>
                    <h2>Get online writing services </h2>
                    <div className="__icon-container">
                        <div class="col-4 text-center">
                            <span ref={done}></span>
                            <span><strong>1,379,740</strong></span>
                            <br />
                            <span>Orders Delivered</span>
                        </div>

                        <div class="col-4 text-center">
                            <span ref={rating}></span>
                            <span><strong>4.9/5</strong></span>
                            <br />
                            <span>5 Star Rating</span>
                        </div>

                        <div class="col-4 text-center">
                            <span ref={phd}></span>
                            <span><strong>5,086</strong></span>
                            <br />
                            <span>PhD's Experts</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cms-call-out">
                <div className="__form-container">
                    <h3>Guaranteed Higher Grade Or Get Your Money Back!</h3>
                    <h2>Get Help Instantly</h2>
                    <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <br />
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Course</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <br />
                        <div class="form-group row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">DeadLine</label>
                                <select id="inputState" class="form-control">
                                    <option value="2:00 AM">2:00 AM</option>
                                    <option value="4:00 AM">4:00 AM</option>
                                    <option value="6:00 AM">6:00 AM</option>
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                    <option value="11:59 PM">11:59 PM</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div class="form-group row">
                            <div class="select-pages">
                                <label for="validationCustom04">Pages :</label>
                                <select class="custom-select" id="validationCustom04" required>
                                    <option selected value="1">1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>                            

                                </select>                                
                                <small id="wordtxt">250 Words</small>
                            </div>                           
                        </div>
                        <br/>
                        <button class="__submit-button">Free Assistance&nbsp;</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Pricing
