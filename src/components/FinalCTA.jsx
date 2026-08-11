import React from 'react';
import { ArrowRight, Car } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  const scrollToWidget = () => {
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCars = () => {
    const carsElem = document.getElementById('cars');
    if (carsElem) {
      carsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="finalcta-section">
      <div className="container">
        <div className="finalcta-card">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>START YOUR JOURNEY</span>
          </div>

          <h2 className="finalcta-title">READY TO EXPLORE MAURITIUS?</h2>

          <p className="finalcta-desc">
            Find your RideMoris car and start planning your island adventure with total freedom and peace of mind.
          </p>

          <div className="finalcta-buttons">
            <button onClick={scrollToWidget} className="btn-primary">
              BOOK A CAR
            </button>
            <button onClick={scrollToCars} className="btn-secondary">
              <span>VIEW OUR CARS</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
