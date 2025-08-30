import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="newsletter">
                <h2>Join Our Members and <br/>Get Discount Up to 50%</h2>
                <div className="newsletter-input">
                    <input type="email" placeholder="Enter Your Email Address"/>
                    <button>Sign Up</button>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-section">
                    <div className="logo">GRAND <span>CAFE</span></div>
                    <p>Agassa, Okene, Kogi State, <br/>Nigeria No. 32416</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/">About Us</Link></li>
                        <li><a href="#certification">Certification</a></li>
                        <li><a href="#how-it-works">How it Works</a></li>
                        <li><a href="#careers">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#shipping">Shipping</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Get In Touch</h4>
                    <ul>
                        <li><i className="fa fa-phone"></i> +234 8096784368</li>
                        <li><i className="fa fa-envelope"></i> sales@grandcafe.com</li>
                        <li><i className="fa fa-clock"></i> Mon-Sun: 8AM-10PM</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Download Our App</h4>
                    <div className="app-links">
                        <a href="#" className="app-link">
                            <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Google Play" />
                        </a>
                        <a href="#" className="app-link">
                            <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=150" alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 Grand Cafe, Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;