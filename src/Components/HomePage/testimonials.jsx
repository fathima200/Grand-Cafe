import React from 'react';

const testimonials = [
    {
        name: 'Akram Kareem',
        rating: 4.9,
        text: 'Your recipes are quick and easy to follow... Thanks for giving my family the gift of a relaxed Mom and delicious food!',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        location: 'Lagos, Nigeria'
    },
    {
        name: 'Lola Tayo',
        rating: 4.8,
        text: 'Wow! The Grand meal kits have taken away so much of my stress! No more wondering "what to cook" and "when to shop".',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        location: 'Abuja, Nigeria'
    },
    {
        name: 'James Okafor',
        rating: 5.0,
        text: 'The quality of ingredients is outstanding! Every meal feels like dining at a 5-star restaurant. Highly recommended!',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
        location: 'Port Harcourt, Nigeria'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonial-content">
                <h2>What Our Clients Say?</h2>
                <div className="underline"></div>
                <p>
                    We provide you with complete meal prep - which includes the prepackaged necessary
                    ingredients for a divine dinner as well as an easy-to-follow recipe guide.
                </p>
                <div className="stats">
                    <div>
                        <strong>15k+</strong>
                        <span>Happy Customers</span>
                    </div>
                    <div>
                        <strong>17k+</strong>
                        <span>Award Winning</span>
                    </div>
                    <div>
                        <strong>30k+</strong>
                        <span>Food Menu</span>
                    </div>
                </div>
            </div>
            <div className="testimonial-cards">
                {testimonials.map((item, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="card-header">
                            <img src={item.image} alt={item.name} />
                            <div className="customer-info">
                                <h4>{item.name}</h4>
                                <span className="location">{item.location}</span>
                            </div>
                            <div className="rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-number">{item.rating}</span>
                            </div>
                        </div>
                        <p className="testimonial-text">"{item.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;