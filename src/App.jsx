import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import About from './components/About';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import MauritiusExperience from './components/MauritiusExperience';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TermsAndConditions from './pages/TermsAndConditions';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToHome = (sectionId) => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToTerms = () => {
    window.history.pushState({}, '', '/terms-and-conditions');
    setCurrentPath('/terms-and-conditions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isTermsPage = currentPath === '/terms-and-conditions';

  return (
    <div className="app-layout">
      <Navbar onNavigateHome={navigateToHome} />
      <main>
        {isTermsPage ? (
          <TermsAndConditions onNavigateHome={navigateToHome} />
        ) : (
          <>
            <Hero />
            <Fleet />
            <About />
            <WhyUs />
            <HowItWorks />
            <MauritiusExperience />
            <Testimonials />
            <FAQ />
            <Contact />
            <FinalCTA />
          </>
        )}
      </main>
      <Footer onNavigateTerms={navigateToTerms} onNavigateHome={navigateToHome} />
      <WhatsAppButton />
    </div>
  );
}
