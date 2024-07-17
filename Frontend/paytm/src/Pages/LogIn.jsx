import React, { useState } from 'react'
import Input from '../Components/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isSignIn, userDataLogin } from '../atom'
import { useSetRecoilState } from 'recoil'
import { toast } from 'react-toastify'



const LogIn = () => {
    
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()
    const setsignIn = useSetRecoilState(isSignIn)
    const setuserData = useSetRecoilState(userDataLogin)

    const handleLogin = async() => {
        try {
            
            const res = await axios.post('http://localhost:3000/api/v1/user/login',{
                email,
                password
            }) 
            console.log(res)
            setsignIn(true)
            navigate("/")
            toast.success(res.data.message)
            window.localStorage.setItem("token",res.data.token)
            window.localStorage.setItem("userId",res.data.userData)

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

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
            
            <button onClick={handleLogin} className='bg-paytm w-full rounded-lg p-2 text-lg font-semibold mt-5'>Log In</button>

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