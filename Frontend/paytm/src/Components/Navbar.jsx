import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className=' mb-5 shadow-lg  '>
        <div className='flex justify-between'>
           <div className='h-20  mx-4 flex'>
                <img src="./public/logo.png" alt="" className='rounded-full shadow-blue' />
                <img src="./public/upi.png" alt="" />
            </div>
            <div className='flex items-center mx-5'>
              <div className='mx-2 text-lg font-semibold'>Home</div>
              <div className='mx-2 text-lg font-semibold'>About</div>
              <div className='mx-2 text-lg font-semibold'>Services</div>
              <div className='mx-2 text-lg font-semibold'>Contact</div>
              <div className='mx-2 text-lg font-semibold'>SignOut</div>
            </div>
        </div>
           
        </div>
    </div>
  )
}

export default Navbar