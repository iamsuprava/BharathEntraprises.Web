import React from 'react';

import Header from '../partials/Header';
import HeroAbout from '../partials/HeroAbout';
import FeaturesAbout from '../partials/FeaturesAbout';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroAbout />
        <FeaturesAbout />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        {/* <Newsletter /> */}

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;