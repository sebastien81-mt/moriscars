import React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open(siteConfig.whatsappUrl, '_blank');
  };

  return (
    <a 
      href={siteConfig.whatsappUrl}
      onClick={handleWhatsAppClick}
      className="whatsapp-float-btn"
      aria-label={`Contact ${siteConfig.brandName} on WhatsApp`}
      title={`Contact ${siteConfig.brandName} Support`}
    >
      <MessageSquare size={22} />
      <span className="whatsapp-tooltip">Need Help? Contact Us</span>
    </a>
  );
}
