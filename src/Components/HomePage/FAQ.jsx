import { useState } from "react";

const faqData = [
  {
    question: 'How does Grand Cafe delivery work?',
    answer: 'Our meal delivery service allows you to skip meal planning and grocery shopping. Grand Cafe delivers step-by-step recipes and fresh, pre-portioned ingredients right to your doorstep.'
  },
  {
    question: 'How much does Grand cost?',
    answer: 'Our meal plans start at N5000 per serving, with various options available depending on the plan and number of meals you choose. Shipping is free on orders over $60.'
  },
  {
    question: 'How many times a week does Grand deliver?',
    answer: 'We deliver fresh meals 7 times a week from Monday to Sunday. You can choose your preferred delivery days when setting up your account.'
  },
  {
    question: 'Can I customize my meal plan?',
    answer: 'Yes, you can customize your meal plan based on your dietary preferences, allergies, and portion sizes. You can also skip weeks or cancel anytime.'
  },
  
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>
          Frequently
          <br />
          Asked Questions
        </h2>
        <p>Check out our frequently asked questions for answers.</p>
        <button className="contact-btn">Contact Us</button>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-title">
              <span>{`0${index + 1}`}</span>
              <h3>{item.question}</h3>
              <button className="toggle-btn">
                {activeIndex === index ? '-' : '+'}
              </button>
            </div>
            {activeIndex === index && item.answer && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;