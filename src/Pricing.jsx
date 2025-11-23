import React from 'react';

const Pricing = () => {
  const tiers = [
    {
      type: "SELF-PACED",
      price: "₦45,000",
      features: ["Lifetime access • Modules • Assignments", "Community access"],
      buttonText: "Enroll Self-Paced"
    },
    {
      type: "LIVE COHORT",
      price: "₦95,000",
      features: ["Weekly live reviews • Mentorship", "Personal feedback on final project"],
      buttonText: "Join Cohort"
    },
    {
      type: "PRO PACKAGE",
      price: "₦165,000",
      features: ["One-on-one coaching • Job placement help", "Resume & showreel review"],
      buttonText: "Apply for Pro"
    }
  ];

  return (
    <section id="pricing" style={{marginTop: '30px'}}>
      <h2>Pricing & Enrollment</h2>
      <p className="small">Flexible tiers for learners and working professionals. Scholarships available — email admissions.</p>

      <div className="pricing">
        {tiers.map((tier, index) => (
          <div key={index} className="tier">
            <div className="small">{tier.type}</div>
            <div className="price">{tier.price}</div>
            {tier.features.map((feature, idx) => (
              <div key={idx} className="feat">{feature}</div>
            ))}
            <div style={{marginTop: '10px'}}><a className="btn" href="#enroll">{tier.buttonText}</a></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;