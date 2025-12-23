import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import PortfolioGrid from '../components/sections/PortfolioGrid';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
