
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Droplets, 
  Search, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  DollarSign,
  MapPin,
  Menu,
  X,
  Star,
  Flame,
  UtilityPole,
  Stethoscope
} from 'lucide-react';

// Sub-components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EmergencyBanner from './components/EmergencyBanner';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <EmergencyBanner />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <ServiceAreas />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
