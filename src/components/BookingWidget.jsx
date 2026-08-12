import React, { useEffect, useState } from 'react';
import { Shield, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './BookingWidget.css';

export default function BookingWidget() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  useEffect(() => {
    // Check if script is already added
    const existingScript = document.querySelector('script[src="https://book.carhiremauritius.com/rental-widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://book.carhiremauritius.com/rental-widget.js';
      script.defer = true;
      script.onload = () => {
        setScriptLoaded(true);
      };
      script.onerror = () => {
        console.warn('Booking widget script failed to load. Falling back to iframe widget.');
        setUseIframeFallback(true);
      };
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    // Safety timer: if the injected widget doesn't output content within 3 seconds, offer fallback iframe
    const fallbackTimer = setTimeout(() => {
      const widgetElem = document.getElementById('wst-rental-widget');
      if (widgetElem && widgetElem.children.length === 0) {
        console.info('Switching to responsive booking widget iframe fallback for optimal compatibility.');
        setUseIframeFallback(true);
      }
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <section id="booking-section" className="booking-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="booking-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>BOOK YOUR CAR</span>
          </div>
          <h2 className="booking-title">FIND YOUR PERFECT CAR</h2>
          <p className="booking-subtitle">
            Choose your dates and select the right {siteConfig.brandName} vehicle for your Mauritius island adventure.
          </p>
        </div>

        {/* Booking Card Wrapper */}
        <div id="booking-widget-container" className="booking-widget-card">
          <div className="widget-badge-bar">
            <div className="widget-badge-item">
              <MapPin size={16} className="badge-icon" />
              <span>Mauritius Airport & Hotel Pickup</span>
            </div>
            <div className="widget-badge-item">
              <Shield size={16} className="badge-icon" />
              <span>Full Insurance Included</span>
            </div>
            <div className="widget-badge-item">
              <Clock size={16} className="badge-icon" />
              <span>Free Cancellation</span>
            </div>
          </div>

          {/* Primary Injected Widget */}
          {!useIframeFallback ? (
            <div className="widget-injected-wrapper">
              <div 
                id="wst-rental-widget" 
                data-referer="FbwaL73-4hKKSvz9"
              ></div>
            </div>
          ) : (
            /* Fallback Responsive Iframe Widget */
            <div className="widget-iframe-wrapper">
              <iframe
                src="https://book.carhiremauritius.com/widget?referer_code=FbwaL73-4hKKSvz9"
                name="carRentalBookingWidget"
                title={`${siteConfig.brandName} Car Hire Booking Widget`}
                className="booking-iframe"
                scrolling="auto"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-forms allow-top-navigation allow-popups allow-popups-to-escape"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
