import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Curriculum from './Curriculum';
import Instructors from './Instructors';
import Pricing from './Pricing';
import TestimonialsFAQ from './TestimonialsFAQ';
import Enrollment from './Enrollment';
import FinalProject from './FinalProject';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />
        <Curriculum />
        <Instructors />
        <Pricing />
        <TestimonialsFAQ />
        <Enrollment />
        <FinalProject />
      </main>
      <Footer />
    </div>
  );
}

export default App;