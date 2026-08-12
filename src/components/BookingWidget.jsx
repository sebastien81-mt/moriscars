import React, { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import './BookingWidget.css';

const SCRIPT_URL = 'https://book.carhiremauritius.com/rental-widget.js';

export default function BookingWidget() {
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let fallbackTimer = null;

    // Remove any stale script elements to force top-level script re-execution on mount
    const existingScripts = document.querySelectorAll(`script[src="${SCRIPT_URL}"]`);
    existingScripts.forEach((s) => s.remove());

    // Inject fresh script element
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      if (!isMounted) return;
    };

    script.onerror = () => {
      if (!isMounted) return;
      console.warn('Booking widget script failed to load. Switching to iframe fallback.');
      setUseIframeFallback(true);
    };

    document.body.appendChild(script);

    // Fallback timer: if the injected widget doesn't render content within 3.5s, switch to iframe fallback
    fallbackTimer = setTimeout(() => {
      if (!isMounted) return;
      const widgetElem = document.getElementById('wst-rental-widget');
      if (widgetElem && widgetElem.children.length === 0 && !widgetElem.shadowRoot) {
        console.info('Switching to booking widget iframe fallback for optimal compatibility.');
        setUseIframeFallback(true);
      }
    }, 3500);

    return () => {
      isMounted = false;
      if (fallbackTimer) clearTimeout(fallbackTimer);

      // Clean up script element when component unmounts
      const scriptToRemove = document.querySelector(`script[src="${SCRIPT_URL}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }

      // Clear container DOM
      const widgetElem = document.getElementById('wst-rental-widget');
      if (widgetElem) {
        widgetElem.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="booking-widget-wrapper">
      {!useIframeFallback ? (
        <div className="widget-injected-wrapper">
          <div 
            id="wst-rental-widget" 
            data-referer="FbwaL73-4hKKSvz9"
          ></div>
        </div>
      ) : (
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
  );
}
