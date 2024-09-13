import React from 'react'
import heroImage from '../assets/brina-blum-s5-NmxNA-7c-unsplash.jpg'
import Layout from '../layout/Layout'
const Hero = () => {
  return (
  
    <div className=' p-2'>
       <div className=''>
            <img src={heroImage} className=' w-full h-full object-cover rounded-xl max-h-[30rem] sm:max-h-[35rem] lg:max-h-[42rem]'/>
            
       </div>
    </div>

  )
}

export default Hero;
