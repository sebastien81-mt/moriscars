import React from 'react';
import { Plane, Hotel, Headset, ArrowRight } from 'lucide-react';
import './About.css';

export default function About() {
  const scrollToWidget = () => {
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image with Overlapping Orange Badge */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=85" 
                alt="Driving along Mauritius scenic coastal roads" 
                className="about-img" 
                loading="lazy"
              />
              
              {/* Overlapping Orange Badge */}
              <div className="about-orange-badge">
                <div className="badge-brand">RIDEMORIS</div>
                <h4 className="badge-slogan">
                  DRIVE.<br />
                  EXPLORE.<br />
                  DISCOVER.
                </h4>
                <a href="#booking-section" onClick={(e) => { e.preventDefault(); scrollToWidget(); }} className="badge-link">
                  <span>DISCOVER MAURITIUS</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Information */}
          <div className="about-content-column">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span>ABOUT RIDEMORIS</span>
            </div>

            <h2 className="about-title">
              CAR RENTAL<br />
              MAURITIUS
            </h2>

            <p className="about-text">
              Explore Mauritius with complete freedom. RideMoris makes renting a car simple, with convenient online booking, reliable vehicles and flexible pickup options for your stay on the island.
            </p>

            <p className="about-subtext">
              Whether you're visiting the iconic peaks of Le Morne, cruising the pristine northern beaches, or exploring local markets in Grand Baie, our modern fleet gives you the flexibility to travel on your own terms without rigid tour schedules.
            </p>

            {/* Three Key Benefit Badges at Bottom */}
            <div className="about-benefits-row">
              <div className="about-benefit-item">
                <div className="benefit-icon-box">
                  <Plane size={24} />
                </div>
                <div className="benefit-text-box">
                  <h5>AIRPORT PICKUP</h5>
                  <p>SSR Airport Terminal</p>
                </div>
              </div>

              <div className="about-benefit-item">
                <div className="benefit-icon-box">
                  <Hotel size={24} />
                </div>
                <div className="benefit-text-box">
                  <h5>HOTEL DELIVERY</h5>
                  <p>Island-Wide Service</p>
                </div>
              </div>

              <div className="about-benefit-item">
                <div className="benefit-icon-box">
                  <Headset size={24} />
                </div>
                <div className="benefit-text-box">
                  <h5>LOCAL SUPPORT</h5>
                  <p>24/7 Mauritius Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
