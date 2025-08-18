import React from "react";
import Header from "./HomePage/header"
import Hero from "./HomePage/hero"
import HowItWorks from "./HomePage/HowItWorks"
import Delivery from "./HomePage/Delivery"
import WhyGrand from "./HomePage/WhyGrand"
import Testimonials from "./HomePage/testimonials"
import FavoriteMeals from "./HomePage/favoriteMeals"
import FAQ from "./HomePage/FAQ"
import Footer from "./HomePage/footer"

const HomePage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <HowItWorks/>
            <Delivery />
            <WhyGrand/>
            <Testimonials/>
            <FavoriteMeals/>
            <FAQ/>
            <Footer/>
            </>
    );
};
                


        export default HomePage;