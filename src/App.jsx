import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import MenuSection from './components/MenuSection';
import PhilosophySection from './components/PhilosophySection';
import VisualJournal from './components/VisualJournal';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A1D15] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StorySection />
        <MenuSection />
        <PhilosophySection />
        <VisualJournal />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
