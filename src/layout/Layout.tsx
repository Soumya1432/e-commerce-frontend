import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface LayoutProps{
  children:ReactNode
}

const Layout:React.FC<LayoutProps> =({children})=>{
  return(
     <div className='flex flex-col min-h-screen overflow-hidden'>
      <Navbar/>
     <main className='flex-grow bg-gray-100'>
      {children}
     </main>
     {/* Footer */}
     <Footer/>
     </div>
  )
}
export default Layout;