import React, { useState } from 'react';

const TestimonialsFAQ = () => {
  const testimonials = [
    {
      quote: "“Transformed my career — got my first paying gig within 2 months.”",
      author: "— Aisha M., Graduate"
    },
    {
      quote: "“Practical, cinematic, and faith-friendly. Loved the focus on storytelling.”",
      author: "— Daniel O., Filmmaker"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No — modules cover from beginner to advanced. Self-paced students get exercises to build skills."
    },
    {
      question: "What software is required?",
      answer: "We teach using Premiere Pro & DaVinci Resolve. Free trial options are covered and alternatives are suggested for Mac users."
    },
    {
      question: "Is there a payment plan?",
      answer: "Yes. Monthly installments are available for cohorts and pro packages."
    },
    {
      question: "Do you assist with job placement?",
      answer: "Pro Package includes mentorship and portfolio review to support placement."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{marginTop: '30px'}}>
      <div style={{display: 'flex', gap: '18px', flexWrap: 'wrap'}}>
        <div style={{flex: '1', minWidth: '320px'}}>
          <h2>What graduates say</h2>
          <div className="testimonials" style={{marginTop: '12px'}}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="quote">
                <strong>{testimonial.quote}</strong>
                <div className="small">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{flex: '1', minWidth: '320px'}}>
          <h2 id="faq">FAQ</h2>
          <div className="faq">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  style={{
                    background: 'var(--panel)',
                    padding: '12px',
                    borderRadius: '10px',
                    marginBottom: '8px',
                    border: '1px solid rgba(255,255,255,0.02)',
                    cursor: 'pointer'
                  }}
                >
                  <strong>{faq.question}</strong>
                </div>
                {openIndex === index && (
                  <div className="faq-answer" style={{padding: '12px', color: 'var(--muted)', fontSize: '13px'}}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFAQ;