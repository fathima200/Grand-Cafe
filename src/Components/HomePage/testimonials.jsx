import React from 'react';

const testimonials = [
    {
    name: 'Akram Kareem',
    rating: 4.9,
    text:'Your recipes are quick and easy to follow... Thanks for giving my family the gift of a relaxed Mom and delicious food!',
    image:''
},

{
    name: 'Lola Tayo',
    rating: 4.8,
    text: 'Wow! The uChef meal kits have taken away so much of my stress! It is not to face "what to cook" and "when to shop".',
    image:''
},
];

const Testimonials =() => {
    return (
        <section
        className="testimonials">
        <div className="testimonial-content">
            <h2>What Our Client Say?</h2>
            <div className="underline"/>
            <p>
                We provide you with complete meal prep- which includes the prepackaged necessary
                ingredients for a divine dinner as well as an easy-to-follow recipe guide in beautiful.
            </p>
            <div className="stats">
                <div><strong>15k+</strong><span>Happy Customers</span></div>
                <div><strong>17k+</strong><span>Awward Winn</span></div>
                <div><strong>30k+</strong><span>Food Menu</span></div>

            </div>
        </div>
        <div className="testimonial-cards">
            {testimonials.map ((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-header">
                            <img src={item.image} alt={item.image}/>
                            <span className="rating"> {item.rating}</span>
                        </div>
                        <h4>{item.name}</h4>
                        <p>"{item.text}"</p>
                    </div>
                ))}
        </div>
        </section>
    );
;}
export default Testimonials;