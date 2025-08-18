import React from "react";
import header from "./HomePage/header"
import hero from "./HomePage/hero"
import HowItWorks from "./HomePage/HowItWorks"
import Delivery from "./HomePage/Delivery"
import WhyGrand from "./HomePage/WhyGrand"
import testimonials from "./HomePage/testimonials"
import favoriteMeals from "./HomePage/favoriteMeals"
import FAQ from "./HomePage/FAQ"
import footer from "./HomePage/footer"

const HomePage = () => {
    return (
        <>
            <header/>
            <hero/>
            <HowItWorks/>
            <Delivery />
            <WhyGrand/>
            <testimonials/>
            <favoriteMeals/>
            <FAQ/>
            <footer/>
            </>
    );
};
                


        export default HomePage;