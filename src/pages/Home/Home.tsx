import React from 'react'

import Hero from '../../components/Hero';
import FeatureCard from '../../components/FeatureCard';
import Layout from "../../layout/Layout"
const Home = () => {
  return (

<Layout>
  <Hero/>

  {/* Feature product */}

  <FeatureCard/>

</Layout>

    
  )
}

export default Home;
