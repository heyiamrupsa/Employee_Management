import React from 'react'

const Header = () => {
  return (
    <div className=' flex items-center justify-between '>
        <h1 className='text-2xl'>Hello <br /> <span className=' text-3xl font-medium'>Rupsa👋</span></h1>
        <button className='bg-amber-900 text-amber-50 px-3 py-2 rounded-sm text-lg font'>Log Out</button>
    </div>
  )
}

export default Header