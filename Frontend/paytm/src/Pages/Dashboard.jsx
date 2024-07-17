import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { getAllUserData, isSignIn, userDataLogin } from '../atom';
import Loader from '../Components/Loader';
import axios from 'axios';

const Dashboard = () => {
  

  const signIn = useRecoilValue(isSignIn)
  
  const UserList = useRecoilValue(getAllUserData)

  const accountInfo  = useRecoilValue(userDataLogin)

  const [list,setList] = useState([]) 

  const [adminData,setadminData ] = useState({})

  const [searchTxt,setSearchText] = useState('')

  const token = window.localStorage.getItem("token")
  const userId = window.localStorage.getItem("userId")

  const navigate = useNavigate() 
  
  const handleSend = (id) => {
      navigate(`/send/${id}`)    
  }

  const getListUser = async() => {
      const res = await axios.get('http://localhost:3000/api/v1/user/findUser?filter=')
      setList(res.data.userList)
    }

    const adminInfo = async () => {
      const res = await axios.get(`http://localhost:3000/api/v1/user/admin/${userId}`)
      console.log(res)
      setadminData(res.data)
    }

    const handleFilterList = async() => {
      const res = await axios.get(`http://localhost:3000/api/v1/user/findUser?filter=${searchTxt}`)
      setList(res.data.userList)
    
    }

  const handleSignUp = () => {
    if(!token && !userId){
      navigate("/signup")
    }
  }

  useEffect(()=>{
    handleSignUp()
    getListUser()
    adminInfo()
  },[token])

  useEffect(()=>{
    handleFilterList()
  },[searchTxt])

  console.log(adminData)
  

  return    (
  <div className=' bg-paytm-light h-[100%] shadow-black '>
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
        <div className='text-2xl font-mono'>Name: {(adminData.adminData?.userData?.firstName)+" "+(adminData.adminData?.userData?.lastName)}</div>
        <div className='text-2xl  font-mono'>UserName: {adminData.adminData?.userData?.email}</div>
              
        <div className='text-2xl  font-mono'>AccountBalance: ₹ {Math.round(adminData.adminData?.balanceData?.balance * 100) / 100}</div>
        </div>
       
        </div>
       

      </div>
     </div>
  </div>
) 
 
}

export default Dashboard