import React from "react";
// import grandhero from '../Uploads/grandhero.jpg'; 
// import grandhero from "../Uploads/grandhero.png"
import food from "../Uploads/steak.png"

const Hero = () => {
    return (
        
        <section className="hero">
            <div className="hero-text">
               <div className="hero-content" >
                <h1>A Twist In Every Tasty Bite</h1>
                <p>Experience Culinary magic with Grand meal kits, perfectly pre-portioned ingredients and chef-curated recipes delivered right to your doorsteps!</p>
                    <div className="hero-buttons">
                    <button className="btn-primary">Select Program</button>
                    <button className="btn-outline">View Menu</button>

                </div>

                </div>
            <div className="hero-image">
                <img src={food} alt="Grand Meals" />
            </div>

                </div>
                </section>
    );
};

export default Hero;
