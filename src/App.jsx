import React from 'react';
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

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
