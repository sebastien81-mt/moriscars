import React, { useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  useEffect(() => {
    // Inject official RideMoris booking widget script if not present
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
      {/* Background Image Container with Dark Overlay */}
      <div className="hero-bg-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85" 
          alt="RideMoris vehicle driving on Mauritius coastal road" 
          className="hero-bg-image" 
          loading="eager"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container-centered">
        
        {/* CENTERED HERO HEADER */}
        <div className="hero-header-centered">
          <div className="eyebrow eyebrow-centered">
            <span className="eyebrow-line"></span>
            <span>CAR RENTAL MAURITIUS</span>
            <span className="eyebrow-line"></span>
          </div>

          <h1 className="hero-title-centered">
            EXPLORE MAURITIUS<br />
            <span className="hero-highlight">YOUR WAY</span>
          </h1>

          <p className="hero-description-centered">
            Discover Mauritius at your own pace with RideMoris. Easy booking, reliable vehicles, airport pickup, and island-wide delivery.
          </p>
        </div>

        {/* OFFICIAL INJECTED BOOKING WIDGET CONTAINER */}
        <div className="booking-widget-container">
          <div id="wst-rental-widget" data-referer="FbwaL73-4hKKSvz9"></div>
        </div>

      </div>
    </section>
  );
}
