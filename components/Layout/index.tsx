import React from 'react'
import Navbarr from '../Navbar'
import Footer from '../Footer'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../public/Mukta-Medium.ttf'})
const index = ({children}) => {
  return (
    <div className={myFont.className}>
    <div className='bg-[#f5f5f5] max-w-[2200px] m-auto'>
        <Navbarr/>
         <div className=''>
        {children}
         </div>
        <Footer/>
    </div>
    </div>
  )
}

export default index
