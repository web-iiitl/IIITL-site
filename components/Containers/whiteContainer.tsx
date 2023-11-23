import React from 'react'

const whiteContainer = ({children}) => {
  return (
    <div className='px-20 h-screen my-10 py-5 bg-white'>
      {children}
    </div>
  )
}

export default whiteContainer
