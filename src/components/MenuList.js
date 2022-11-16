import React from 'react'

const MenuList = ({title, catagory, img, price, desc}) => {
  return (
    <div className='mt-10 mx-5'>
      <img src={img} alt='img' className='border-4 border-[#c59d5f] rounded-md' />
      <div>
        <div className='flex justify-between py-3 border-b-2 border-gray-300 tracking-widest font-bold'>
          <h5 className='capitalize'>{title}</h5>
          <p className='text-[#c59d5f]'>{price}</p>
        </div>
          <p className='text-gray-500 my-5'>{desc}</p>
      </div>
    </div>
  )
}

export default MenuList