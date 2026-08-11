import React from 'react';
import { Plane, Key, ShieldCheck, Car, Headphones, MousePointerClick } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './WhyUs.css';

const REASONS = [
  {
    icon: Plane,
    title: 'AIRPORT PICKUP',
    desc: 'Collect your car right at SSR International Airport upon arrival so your vacation starts without delay.'
  },
  {
    icon: Key,
    title: 'HOTEL DELIVERY',
    desc: 'Convenient vehicle delivery and pickup directly at your hotel, resort, or villa anywhere on the island.'
  },
  {
    icon: ShieldCheck,
    title: 'TRANSPARENT BOOKING',
    desc: 'No hidden extras, surprising deposit terms, or hidden fees. Clear terms confirmed before you book.'
  },
  {
    icon: Car,
    title: 'MODERN & RELIABLE FLEET',
    desc: 'Clean, regularly serviced, fully insured modern hatchbacks, compact SUVs, and 7-seater family cars.'
  },
  {
    icon: Headphones,
    title: '24/7 LOCAL SUPPORT',
    desc: 'Local Mauritius support team available throughout your trip for assistance, road advice, and tips.'
  },
  {
    icon: MousePointerClick,
    title: 'FAST ONLINE BOOKING',
    desc: 'Reserve your vehicle online in under 2 minutes with instant confirmation.'
  }
];

export default function WhyUs() {
  return (
    <section className="whyus-section section-padding">
      <div className="container">
        <div className="whyus-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>THE {siteConfig.brandName.toUpperCase()} DIFFERENCE</span>
          </div>
          <h2 className="whyus-title">WHY CHOOSE {siteConfig.brandName.toUpperCase()}</h2>
          <p className="whyus-subtitle">Simple rental. Local service. Complete freedom to explore.</p>
        </div>

        <div className="whyus-grid">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="whyus-card">
                <div className="whyus-card-header">
                  <div className="whyus-icon-box">
                    <Icon size={22} className="whyus-icon" />
                  </div>
                  <span className="whyus-num">0{index + 1}</span>
                </div>
                <h3 className="whyus-card-title">{item.title}</h3>
                <p className="whyus-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
