import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import grandLogo from "../Uploads/grandlogo.jpg";

const Header = () => {
    const { getCartItemsCount } = useCart();
    const cartItemsCount = getCartItemsCount();

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={grandLogo} alt="GRAND" />
                </Link>
            </div>
            <nav className="header__nav">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <a href="#how-it-works">How it works</a>
                <a href="#about">About</a>
                <a href="#faq">FAQs</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="icons">
                <span><i className="fa fa-search"></i></span>
                <Link to="/cart" className="cart-icon">
                    <i className="fa fa-shopping-cart"></i>
                    {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
                </Link>
                <span><i className="fa fa-user"></i></span>
            </div>
        </header>
    );
};

export default Header;