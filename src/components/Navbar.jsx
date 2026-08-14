import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToWidget = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="/" onClick={handleLogoClick} className="navbar-logo" aria-label="MorisCars Home">
          <img 
            src="/assets/logo.svg" 
            alt="MorisCars - Car Rental Mauritius" 
            className="logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="nav-link">HOME</a>
          <a href="#cars" onClick={(e) => scrollToSection(e, 'cars')} className="nav-link">CARS</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">ABOUT US</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="nav-link">FAQ</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-link">CONTACT</a>
        </nav>

        {/* Desktop & Mobile CTA (BOOK A CAR) & Mobile Hamburger Toggle */}
        <div className="navbar-actions">
          <a href="#hero" onClick={scrollToWidget} className="btn-primary header-nav-cta">
            BOOK A CAR
          </a>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Solid Light Menu Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="mobile-link">HOME</a>
          <a href="#cars" onClick={(e) => scrollToSection(e, 'cars')} className="mobile-link">CARS</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="mobile-link">ABOUT US</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="mobile-link">FAQ</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="mobile-link">CONTACT</a>
        </div>
      </div>
    </header>
  );
}
