import React from 'react';
import BookingWidget from './BookingWidget';
import './Hero.css';

export default function Hero() {
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
          BOOK &amp; EXPLORE MAURITIUS
        </h1>

        {/* Centered Injected Booking Widget Card */}
        <div className="hero-widget-card">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
