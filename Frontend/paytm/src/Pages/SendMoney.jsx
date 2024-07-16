import React from 'react'

const SendMoney = () => {
  return (
    <div className=' bg-paytm-light h-[100vh] shadow-black '>
      <div className=' p-2 m-2 flex justify-center'>
        <div className=' flex mt-10 p-10 justify-center rounded-lg border border-black'>
          <div className=' flex flex-col justify-center items-center'>
            <div className='font-semibold text-2xl mb-2'>
          Send Money
        </div>
        <div className='my-5'>
          <img className='h-14' src="../public/user.png" alt="" />
        </div>
        <div className='flex   items-center'>
        <div className='h-[50px] w-[50px] text-center text-white bg-pink-500 text-3xl font-bold rounded-full mr-8 -ml-16'>
          s
        </div>
          <div className='font-semibold text-2xl '>
          Shubham Sagar
        </div>
        </div>
        
        <div className='mt-9 '>
          <input type="text" className='p-2 focus:outline-none rounded-l-lg' placeholder='Enter Amount' />
          <button className='bg-paytm  py-2 px-5 rounded-r-lg'>Pay</button>
        </div>
          </div>
          
        </div>
        

      </div>
    </div>
  )
}

export default SendMoney