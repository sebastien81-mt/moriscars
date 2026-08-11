import React from 'react';
import { MessageSquare } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href="#contact" 
      onClick={handleWhatsAppClick}
      className="whatsapp-float-btn"
      aria-label="Contact RideMoris on WhatsApp"
      title="Contact RideMoris Support"
    >
      <MessageSquare size={22} />
      <span className="whatsapp-tooltip">Need Help? Contact Us</span>
    </a>
  );
}
