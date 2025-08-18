import React from 'react';

const footer =() => {
    return (
        <footer className="footer">
        <div className="newsletter">
            <h2>Join Our Member and <br/>Get Discount Upto 50%</h2>
            <div className="newsletter-input">
                <input type="email" placeholder= "Enter Your Email Address"/>
                <button>Sign Up</button>
            </div>
            </div>

            <div className="footer-content">
                <div className="footer-left">
                    <div className="logo">GRAND <span>CAFE</span></div>
                    <p>Agassa, okene, kogi state, <br/>Nigeria No. 32416</p>
                    <div className="socials"><i className="fab fa-facebook-f"/></div>
                    <div className="socials"><i className="fab fa-instagram"/></div>
                    <div className="socials"><i className="fab fa-twitter"/></div>

                </div>
            </div>

            <div className="footer-links">
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                         <li>Certification</li>
                          <li>How it Works</li>
                           <li>How it Works</li>
                    </ul>
                </div>
                <div>
                     <h4>Policy</h4>
            <ul>
                        <li>FAQ</li>
                         <li>Contact</li>
                          <li>Shipping</li>
                           <li>Privacy</li>
                    </ul>
                </div>
                <div>
                    <h4>Get In Touch</h4>
                     <ul>
                        <li>+234 8096784368</li>
                         <li>sales@grandcafe.com</li>
                    </ul>
                </div>
                <div>
                    <h4>Discover Our App</h4>
                    <img src="/google-play.png" alt="Google Play"/>
                    <img src="/app-store.png" alt="App Store"/>
                </div>
            </div>
            
            <div className="footer-bottom">
                2025 the Grand,Inc.ALL RIGHT RESERVED.
            </div>
            </footer>

           
    );
};
export default footer;