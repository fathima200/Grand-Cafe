import React from "react";

const features = [
    {icon:'', Text: 'Easy & Convenient'},
    {icon:'', Text: 'Zeehan Supervision'},
    {icon:'', Text: 'No More commitments'},
    {icon:'', Text: 'Most 5-star reviews'},
    {icon:'', Text: 'Fresh and Affordable'},
    {icon:'', Text: 'No skimpin chicken!'},
];

const WhyGrand = () => {
    return (
        <section className="why-grand">
            <h2>Why Grand Meals</h2>
            <div 
            className="underline"/>
                <div className="features">{features.map((item, index) => (
                        <div className="feature" key={index}>
                            <div className="icon">{item.icon}</div>
                            <p>{item.Text}</p>
                        </div>
                    ))}
                </div>
                </section>
    );
};
export default WhyGrand;