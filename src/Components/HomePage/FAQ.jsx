import {useState} from react;

const faqData =[
{
    question: 'How does Grand Cafe delivery work?',
    answer:'Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh,pre-portioned ingredients.'
},
{
    question:'How much does Grand cost?',
    answer:'',
},
{
    question:'How many times a week does Grand deliver?',
    answer:'',
},
];

const FAQ =() => {
    const [activeIndex,setActiveIndex]= useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex (index === activeIndex ? null: index);
    };

    return (
        <section className="faq-section">
            <div className="faq-header">
                <h2>
                    Frequently
                    <br/>
                    Asked questions
                    </h2>
                <p>Check out our frequently asked questions for answers.</p>
                <button className="contact-btn">Contact Us</button>
            </div>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div 
                key={index}
            className={`faq-item $ {activeIndex === index ? 'active' : '' }`} 
            onClick={() => toggleFAQ(index)}
                >
        <div className="faq-title">
            <span>{`0$ {index + 1}`}</span>
        <h3>{item.question}</h3>
        <button className="toggle-btn">
            {activeIndex === index ? '-': '+'}
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