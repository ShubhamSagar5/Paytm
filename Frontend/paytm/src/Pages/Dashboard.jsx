import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { getAllUserData, isSignIn } from '../atom';
import Loader from '../Components/Loader';
import axios from 'axios';

const Dashboard = () => {
  

  const signIn = useRecoilValue(isSignIn)
  
  const UserList = useRecoilValue(getAllUserData)

  const [list,setList] = useState([]) 

  const [searchTxt,setSearchText] = useState('')

  

  const navigate = useNavigate() 
  
  const handleSend = (id) => {
      navigate(`/send/${id}`)    
  }

  const getListUser = async() => {
      const res = await axios.get('http://localhost:3000/api/v1/user/findUser?filter=')
      setList(res.data.userList)
    }

  useEffect(()=>{
    if(!signIn){
      navigate("/signup")
    }
    getListUser()
  },[signIn])

  if(!signIn){
    return <Loader/>
  }

  return    (
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
                
                const capitalize = (str) => {
                   return str.charAt(0).toUpperCase() + str.slice(1)
                } 

                return (
                  <div className='flex justify-between items-center mt-5 ' key={user._id}>
                        <div className='text-xl font-semibold'>{capitalize(user.firstName) + " " + capitalize(user.lastName)}</div>
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