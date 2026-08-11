import React, { useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  useEffect(() => {
    // Inject official CarHireMauritius booking widget script if not present
    const existingScript = document.querySelector('script[src="https://book.carhiremauritius.com/rental-widget.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://book.carhiremauritius.com/rental-widget.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Background Cutout Car Image (Transparent Background) */}
      <div className="hero-bg-car-wrapper" aria-hidden="true">
        <img 
          src="/assets/hero-car-transparent.png" 
          alt="" 
          className="hero-bg-car-img" 
          loading="eager"
        />
      </div>

      <div className="container hero-centered-container">
        {/* Centered Hero Headline */}
        <h1 className="hero-centered-title">
          BOOK & EXPLORE MAURITIUS
        </h1>

        {/* Centered Injected Booking Widget Container */}
        <div className="hero-widget-card">
          <div id="wst-rental-widget" data-referer="FbwaL73-4hKKSvz9"></div>
        </div>
      </div>
    </section>
  );
}
