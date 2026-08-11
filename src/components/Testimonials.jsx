import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    quote: "Great service from arrival to departure. The Suzuki Swift was clean, fuel-efficient, and waiting for us right outside SSR airport terminal.",
    name: "ALEXANDER W.",
    country: "United Kingdom",
    car: "Rented Suzuki Swift Automatic"
  },
  {
    id: 2,
    rating: 5,
    quote: "Booking with RideMoris was completely smooth. The hotel delivery in Grand Baie arrived exactly on time, and communication on WhatsApp was excellent.",
    name: "SOPHIE M.",
    country: "France",
    car: "Rented Toyota Raize SUV"
  },
  {
    id: 3,
    rating: 5,
    quote: "Transparent pricing with no unexpected deposit surprises. Having a reliable car made exploring Chamarel and Le Morne stress-free.",
    name: "MARKUS K.",
    country: "Germany",
    car: "Rented Hyundai i20"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="testimonials-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>CUSTOMER REVIEWS</span>
          </div>
          <h2 className="testimonials-title">TRUSTED BY TRAVELLERS</h2>
          <p className="testimonials-subtitle">Read how RideMoris helps island visitors enjoy effortless road trips around Mauritius.</p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="quote-icon-box">
                <Quote size={28} className="quote-icon" />
              </div>

              <div className="stars-row">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon" />
                ))}
              </div>

              <p className="review-quote">"{review.quote}"</p>

              <div className="review-author">
                <h4 className="author-name">{review.name}</h4>
                <p className="author-details">{review.country} · <span className="author-car">{review.car}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
