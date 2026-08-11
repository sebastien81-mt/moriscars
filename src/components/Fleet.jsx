import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import './Fleet.css';

const FLEET_DATA = [
  {
    id: 'swift',
    name: 'SUZUKI SWIFT',
    category: 'ECONOMY',
    categoryTag: 'ECONOMY',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'raize',
    name: 'TOYOTA RAIZE',
    category: 'SUV',
    categoryTag: 'COMPACT SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'i20',
    name: 'HYUNDAI I20',
    category: 'ECONOMY',
    categoryTag: 'ECONOMY PLUS',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'yaris',
    name: 'TOYOTA YARIS',
    category: 'ECONOMY',
    categoryTag: 'COMPACT',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vitara',
    name: 'SUZUKI VITARA',
    category: 'SUV',
    categoryTag: 'FULL SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'avanza',
    name: 'TOYOTA AVANZA',
    category: 'FAMILY',
    categoryTag: '7-SEATER FAMILY',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'picanto',
    name: 'KIA PICANTO',
    category: 'ECONOMY',
    categoryTag: 'MINI CITY',
    transmission: 'AUTOMATIC',
    seats: 4,
    luggage: '1 Bag',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corolla',
    name: 'TOYOTA COROLLA',
    category: 'PREMIUM',
    categoryTag: 'EXECUTIVE SEDAN',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  }
];

const CATEGORIES = ['ALL', 'ECONOMY', 'SUV', 'FAMILY', 'PREMIUM'];

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredFleet = activeCategory === 'ALL'
    ? FLEET_DATA
    : FLEET_DATA.filter((item) => item.category === activeCategory);

  const scrollToWidget = () => {
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cars" className="fleet-section section-padding">
      <div className="container">
        {/* Header Bar */}
        <div className="fleet-top-bar">
          <div className="fleet-title-block">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span>RIDEMORIS FLEET</span>
            </div>
            <h2 className="fleet-heading">FEATURED CARS</h2>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="fleet-grid">
          {filteredFleet.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="fleet-bottom-bar">
          <p className="fleet-note">
            All RideMoris vehicles are air-conditioned, regularly serviced, and supplied with full comprehensive insurance options.
          </p>
          <button onClick={scrollToWidget} className="btn-secondary">
            VIEW ALL CARS
          </button>
        </div>
      </div>
    </section>
  );
}
