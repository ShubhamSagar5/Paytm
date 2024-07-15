import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  

  const people = [
    {
      id: 1,
      name: "Shubham Sagar",
      username: "shubham@gmail.com",
      accountBalance: 452000
    },
    {
      id: 2,
      name: "John Doe",
      username: "johndoe@example.com",
      accountBalance: 30000
    },
    {
      id: 3,
      name: "Jane Smith",
      username: "janesmith@example.com",
      accountBalance: 50000
    },
    {
      id: 4,
      name: "Emily Johnson",
      username: "emilyj@example.com",
      accountBalance: 75000
    },
    {
      id: 5,
      name: "Michael Brown",
      username: "michaelb@example.com",
      accountBalance: 120000
    }
  ];
  

  const [searchTxt,setSearchText] = useState('')
  const [list,setList] = useState(people) 

  const navigate = useNavigate() 
  
  const handleSend = (id) => {
      navigate(`/send/${id}`)    
  }



  return (
    <div className=' bg-paytm-light h-[100vh] shadow-black '>
       <div className='m-2  flex justify-between'>
      
        <div className='m-3 w-8/12'>
          {/* client list */}
          <div>
            <div className='w-'>

                <input type="text" value={searchTxt} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search . . . . . . . . . . . . . . . . . . . . ' name="" id="" className='p-2 w-full border border-black rounded-xl shadow-2xl focus:outline-none ' />
              
            </div>
            

            <div className='mt-10 '>
              <div>
              {
                list.map((user)=>{
                  return (
                    <div className='flex justify-between items-center mt-5 '>
                          <div className='text-xl font-semibold'>{user.name}</div>
                          <button onClick={()=>handleSend(user.id)} className='bg-paytm py-2 px-4 rounded-lg'>Send</button>                          
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
          
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