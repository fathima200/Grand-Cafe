import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Choose Your Meals',
      description: '20+ menus to choose from',
      img: '/images/choose-meals.png',
    },
    {
      title: 'We Deliver It To You',
      description: 'Choose your dates for delivery',
      img: '/images/delivery.png',
    },
    {
      title: 'Cook & Enjoy',
      description: 'Eat your freshly cooked meal',
      img: '/images/cook-enjoy.png',
    },
  ];

  return (
    <section className="how-it-works">
      <h2>Watch It Works</h2>
      <div className="underline"></div>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <img src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;