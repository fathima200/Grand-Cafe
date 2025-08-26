import React from "react";
import potato from "../Uploads/potato.png"
import leaf from "../Uploads/leaf.png"

const Delivery = () => {
    return (
        <section className="delivery">
            <div className="delivery-content">
            <div className="image-container">
                <img src={potato} alt=""/>
                 </div>

                 <div className="text-content">
                    <h2>We Deliver Anywhere in the country</h2>
                    <p>Each sumptous freshly made meal is sized perfectly for 1 person to enjoy at 1 sitting.
                        Our fully prepared meals are delivered fresh and ready to eat in just few minutes.
                    </p>

                    <div className="buttons">
                        <button className="contact">Contact Us</button>
                        <button className="menu">View Menu</button>
                    </div>
                    <img src={leaf} alt="" />
                    <img src={leaf} alt="" className="mirrored" />
                 </div>
                 </div>
        </section> 
    );
};

export default Delivery;