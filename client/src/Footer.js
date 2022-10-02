import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <section className="footer-sect bg-dark">
                <div className="container footer-div1 text-white ">
                    <div className="f-subdiv text-center">
                        <p className="subdiv-mainh font-h"><li>Let us Help</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>My Page</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Help Center</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Contact Us</li></p>

                    </div>
                    <div className="f-subdiv text-center">
                        <p className="subdiv-mainh font-h"><li>What we Offer</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Our Products</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Upload Your Designs</li></p>

                    </div>
                    <div className="f-subdiv text-center">
                        <p className="subdiv-mainh font-h"><li>Our Company</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>About Us</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Carrers</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>For Media</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>For Investors</li></p>

                    </div>
                    <div className="f-subdiv text-center">
                        <p className="subdiv-mainh font-h"><li>Our Policies</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Terms of Use</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Copyright matters</li></p>
                        <p className="subdiv-bodyh  blu-font"><li>Patents and Trademarks</li></p>


                    </div>

                </div>
                <div className="container text-white">
                    <div className="row">
                        <div className="col-lg-6 blu-font">
                            <p className=" font-h">Connect Us</p>
                            <p>


                                <a href="https://www.facebook.com/" target="_blank"><i class="footer-fa fab fa-facebook"></i></a>

                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="footer-fa fab fa-instagram"></i></a>

                                <a href="https://www.twitter.com/login/" target="_blank"><i class="footer-fa fab fa-twitter"></i></a>

                                <a href="https://www.linkedin.com/login/" target="_blank"><i class="footer-fa fab fa-linkedin"></i></a>



                            </p>
                        </div>
                        <div className="col-lg-6 email-footer m-auto">
                            <p className="ms-2  font-h">Sign Up for More Services</p>
                            <input className="input-email ps-2" type="text" placeholder="Email Address" />
                            <button className="btn-email"><i class="email-f-icon fas fa-envelope"></i></button>

                        </div>
                        <div className="container l-footer text-white text-center mt-2">
                            <p className=" blu-font">&copy; SafeTravel 2020-2021 All rights reserved</p>
                        </div>

                    </div>
                </div>

            </section>



        </>
    );
};


export default Footer;