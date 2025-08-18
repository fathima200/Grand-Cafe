import React from "react";
import grandLogo from "../Uploads/grandlogo.jpg";

const Header =() => {
    return(
            <header className="header">
                <div className="header__logo">
                    <img src={grandLogo} alt="GRAND" />
                </div>
                <nav className="header__nav">
                    <a href="#">Home</a>
                    <a href="#">Menu</a>
                    <a href="#">How it works</a>
                    <a href="#">About</a>
                    <a href="#">fAQs</a>
                    <a href="#">Contact</a>
                    </nav>

                    <div className="icons">
                        <span><i className="fa fa-search"></i></span>
                        <span><i className="fa fa-shopping-cart"></i></span>
                        <span><i className="fa fa-user"></i></span>
                    </div>
                    </header>
    );
};
export default Header;
