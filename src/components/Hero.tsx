import React from 'react'
import heroImage from '../assets/brina-blum-s5-NmxNA-7c-unsplash.jpg'
const Hero = () => {
  return (
    <div className=' p-2'>
       <div className=''>
            <img src={heroImage} className='w-full h-[42rem] rounded-xl'/>
            
       </div>
    </div>
  )
}

export default Hero;
