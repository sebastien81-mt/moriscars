import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './MauritiusExperience.css';

export default function MauritiusExperience() {
  const scrollToWidget = () => {
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="experience-section">
      <div className="experience-bg-box">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85" 
          alt="Scenic coastal road along Le Morne peninsula in Mauritius" 
          className="experience-bg-img" 
          loading="lazy"
        />
        <div className="experience-overlay"></div>
      </div>

      <div className="container experience-content">
        <div className="eyebrow eyebrow-light">
          <span className="eyebrow-line eyebrow-line-light"></span>
          <span>MAURITIUS ROAD TRIP</span>
        </div>

        <h2 className="experience-title">
          YOUR ISLAND.<br />
          YOUR ROAD.<br />
          <span className="text-coral">YOUR ADVENTURE.</span>
        </h2>

        <p className="experience-desc">
          Explore white-sand beaches, mountain lookouts, tea plantations, and coastal fishing villages across Mauritius with absolute independence and comfort with {siteConfig.brandName}.
        </p>

        <div className="experience-tags">
          <span className="exp-tag"><MapPin size={14} /> Le Morne Brabant</span>
          <span className="exp-tag"><MapPin size={14} /> Grand Baie</span>
          <span className="exp-tag"><MapPin size={14} /> Chamarel Seven Colored Earth</span>
          <span className="exp-tag"><MapPin size={14} /> Belle Mare Coast</span>
        </div>

        <button onClick={scrollToWidget} className="btn-accent experience-cta">
          <span>FIND YOUR CAR</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
