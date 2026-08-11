import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './FAQ.css';

const FAQS = [
  {
    q: "What documents do I need to rent a car in Mauritius?",
    a: "To rent a car, you’ll need a valid driver’s license, passport, and a credit/debit card for payment."
  },
  {
    q: "Can I collect the car at Mauritius Airport (SSR International)?",
    a: `Yes! ${siteConfig.brandName} offers convenient airport delivery at Sir Seewoosagur Ramgoolam International Airport (MRU). Our representative will meet you at the arrivals terminal so you can start driving immediately.`
  },
  {
    q: "Can the car be delivered to my hotel or villa?",
    a: "Yes, we provide island-wide vehicle delivery directly to hotels, resorts, and private holiday villas across Mauritius including Grand Baie, Flic en Flac, Belle Mare, and Le Morne."
  },
  {
    q: "Is insurance included in the rental price?",
    a: `All ${siteConfig.brandName} vehicles come with standard Third Party Insurance and Collision Damage Waiver (CDW). Full Comprehensive Insurance upgrades with reduced excess are also selectable during booking.`
  },
  {
    q: "Is there a security deposit required?",
    a: "A standard security deposit is authorized on your card at pickup and fully released upon vehicle return in good condition. Deposit amounts vary depending on the vehicle class."
  },
  {
    q: "Can I add an additional driver to my reservation?",
    a: "Yes, additional drivers can easily be added to your rental contract upon pickup by presenting their valid driver's license and passport."
  },
  {
    q: "What happens if my flight to Mauritius is delayed?",
    a: "When booking, provide your flight number so our team can monitor live arrival status. We adjust your pickup time automatically without cancellation penalties."
  },
  {
    q: "How do I return the vehicle at the end of my trip?",
    a: "Returns are simple and flexible. You can hand back the keys at SSR Airport before your departure flight or arrange a designated hotel pickup time with our team."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="faq-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>NEED ANSWERS?</span>
          </div>
          <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="faq-subtitle">Everything you need to know about driving and renting a car in Mauritius with {siteConfig.brandName}.</p>
        </div>

        <div className="faq-accordion">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{faq.q}</h3>
                  <button 
                    className="faq-toggle-btn" 
                    aria-expanded={isOpen}
                    aria-label="Toggle answer"
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </div>

                {isOpen && (
                  <div className="faq-answer-box">
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
