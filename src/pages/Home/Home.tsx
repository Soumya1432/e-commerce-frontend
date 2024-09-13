import React from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import FeatureCard from '../../components/FeatureCard';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className='p-4'>
      {/* Navbar */}
        <Navbar/>
      {/* Hero section */}
        <Hero/>
      {/* Feature Product */}
      <FeatureCard/>
      {/* Sale introduced */}
      {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home;
