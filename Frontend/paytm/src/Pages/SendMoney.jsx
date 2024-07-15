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
        <div className='font-semibold text-xl mt-3'>
          Shubham Sagar
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