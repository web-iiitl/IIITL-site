import React from 'react'
import Navbarr from '../Navbar'
import Footer from '../Footer'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../public/Mukta-Medium.ttf'})
const index = ({children}) => {
  return (
    <div className={myFont.className}>
    <div className='bg-white max-w-[2200px] m-auto'>
        <Navbarr/>
         <div className='px-10'>
        {children}
         </div>
        <Footer/>
    </div>
    </div>
  )
}

export default index
