import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

axios.defaults.withCredentials = true;

const SendMoney = () => {
  
  
  const [amount,setAmount] = useState()
  const navigate = useNavigate()

  const {id} = useParams() 

  const Token = window.localStorage.getItem("token")

  const [reciverData,setReciverData] = useState({}) 
  const [initalLetter,setInitalLetter] = useState('')

  const getReciverData = async() => {
    const res = await axios.get(`http://localhost:3000/api/v1/user/admin/${id}`)
    console.log(res)
    setReciverData(res.data.adminData.userData)
    setInitalLetter(res.data.adminData.userData.firstName.charAt(0))
 
  }


  const handlePay = async() => {
   try {
     const res = await axios.post(`http://localhost:3000/api/v1/bank/transferFund/${id}`,{
       amount
     },{
      headers: {
                'Authorization': `Bearer ${Token}`
            }
     })
     console.log(res)

     toast.success(res.data.message)
     setAmount('')
     navigate("/")
   } catch (error) {
    toast.error(error.response.data.message)
   }
  }

  useEffect(()=>{
    getReciverData()
  },[id])


  
  
  return (
    <div className=' bg-paytm-light h-[100vh] shadow-black '>
      <button onClick={()=>{
        navigate("/")
      }} className='py-2 px-4 bg-paytm m-2 rounded-lg '> {"<--- "} Back</button>
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
          {initalLetter}
        </div>
          <div className='font-semibold text-2xl '>
          {reciverData.firstName + " " + reciverData.lastName}
        </div>
        </div>
        
        <div className='mt-9 '>
          <input type="text" onChange={(e)=>{
            setAmount(e.target.value)
          }} className='p-2 focus:outline-none rounded-l-lg' placeholder='Enter Amount' />
          <button onClick={handlePay} className='bg-paytm  py-2 px-5 rounded-r-lg'>Pay</button>
        </div>
          </div>
          
        </div>
        

      </div>
    </div>
  )
}

export default SendMoney