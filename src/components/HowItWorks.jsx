import React from 'react';
import { Search, CalendarCheck, Compass } from 'lucide-react';
import './HowItWorks.css';

const STEPS = [
  {
    num: '01',
    title: 'CHOOSE YOUR CAR',
    desc: 'Select your preferred dates and browse our modern selection of compact hatchbacks, SUVs, and family vehicles.',
    icon: Search
  },
  {
    num: '02',
    title: 'BOOK ONLINE',
    desc: 'Confirm your reservation in seconds with transparent pricing, instant confirmation, and flexible insurance options.',
    icon: CalendarCheck
  },
  {
    num: '03',
    title: 'START EXPLORING',
    desc: 'Collect your key at SSR Airport or your hotel lobby, step inside, and experience the natural magic of Mauritius.',
    icon: Compass
  }
];

export default function HowItWorks() {
  const scrollToWidget = () => {
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="how-section section-padding">
      <div className="container">
        <div className="how-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>THREE SIMPLE STEPS</span>
          </div>
          <h2 className="how-title">RENTING A CAR MADE SIMPLE</h2>
        </div>

        <div className="how-grid">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="how-card">
                <div className="ghost-num">{step.num}</div>
                <div className="how-card-inner">
                  <div className="how-step-badge">
                    <Icon size={20} className="step-icon" />
                    <span>STEP {step.num}</span>
                  </div>
                  <h3 className="how-step-title">{step.title}</h3>
                  <p className="how-step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="how-cta-box">
          <button onClick={scrollToWidget} className="btn-primary">
            RESERVE YOUR CAR NOW
          </button>
        </div>
      </div>
    </section>
  );
}
