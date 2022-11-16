import React from 'react'

const Catagories = () => {
  return (
    <div className='text-center my-7 flex justify-center sm:text-xl md:text-2xl'>
        <button className='hover:bg-[#c59d5f] hover:text-white px-3 py-1 duration-500 rounded-md mx-1 text-[#c59d5f]'>All</button>
        <button className='hover:bg-[#c59d5f] hover:text-white px-3 py-1 duration-500 rounded-md mx-1 text-[#c59d5f]'>Breakfast</button>
        <button className='hover:bg-[#c59d5f] hover:text-white px-3 py-1 duration-500 rounded-md mx-1 text-[#c59d5f]'>Lunch</button>
        <button className='hover:bg-[#c59d5f] hover:text-white px-3 py-1 duration-500 rounded-md mx-1 text-[#c59d5f]'>Shakes</button>
    </div>
  )
}

export default Catagories