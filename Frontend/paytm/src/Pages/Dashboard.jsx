import React from 'react'

const Dashboard = () => {
  return (
    <div className=' bg-paytm-light h-[100vh] shadow-black '>
       <div className='m-2  flex justify-between'>
      
        <div className=''>
          {/* client list */}
          
        </div>
        <div className='m-3 '>
          {/* info */}
          <div className='m-2 shadow-2xl p-5'>
          <div className='text-3xl font-semibold '>My Account Information</div>
          <div className='mt-10'>
          <div className='text-2xl font-mono'>Name: Shubham Sagar</div>
          <div className='text-2xl  font-mono'>UserName: shubham@gmail.com</div>
          <div className='text-2xl  font-mono'>AccountBalance: 452000</div>
          </div>
         
          </div>
         

        </div>
       </div>
    </div>
  )
}

export default Dashboard