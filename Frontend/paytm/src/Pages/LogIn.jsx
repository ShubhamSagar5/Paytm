import React, { useState } from 'react'
import Input from '../Components/Input'
import { Link } from 'react-router-dom'



const LogIn = () => {
    
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    console.log(email)
    return (
    <div className='flex justify-center '>
    <div className='w-3/12 shadow-xl rounded-lg'>
    <div className=' m-2 border p-2 '>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-2xl'>LogIn to Paytm Account</p>
                <p>One account for everything!! </p>
            </div>
            <div className='m-3 '>
            <div className='mt-14'>
            <Input label='Email' placeholder ="Enter Your Email" onchange={setEmail} value={email} required />
            <Input label='Password' placeholder ="Enter Your Password" onchange={setPassword} value={password} required />

            </div>

            <Link to={"/signup"}>
               <div className='text-sm font-semibold mt-4'>
            * If you are new, please sign up ⏩
            </div> 
            </Link>
            </div>
        </div>
    </div>
       
    </div>
  )
}

export default LogIn