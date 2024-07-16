import React, { useState } from 'react'
import Input from '../Components/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { isSignIn } from '../atom'

const SingUp = () => {

    const [email,setEmail]= useState('')
    const [firstName,setFirstName]  = useState('')
    const [lastName,setLastName] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const setsignIn = useSetRecoilState(isSignIn)

    const handleSignUp = async() => {
        try {
            
            const res = await axios.post('http://localhost:3000/api/v1/user/signUp',{
                email,
                firstName,
                lastName,
                password
            }) 
            setsignIn(true)
            navigate("/")
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
    <div className='flex justify-center '>
    <div className='w-3/12 shadow-xl rounded-lg'>
    <div className=' m-2 border p-2 '>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-2xl'>Create an Paytm Account</p>
                <p>One account for everything!! </p>
            </div>
            <div className='m-3 '>
            <div className='mt-14'>
            <Input label='Email' placeholder ="Enter Your Email" onchange={setEmail} value={email} required />
            <Input label='First Name' placeholder ="Enter Your First Name" onchange={setFirstName} value={firstName} required />
            <Input label='Last Name' placeholder ="Enter Your Last Name" onchange={setLastName} value={lastName} required />
            <Input label='Password' placeholder ="Enter Your Password" onchange={setPassword} value={password} required />

            <button className='bg-paytm w-full rounded-lg p-2 text-lg font-semibold mt-5' onClick={handleSignUp} >SignUp</button>
            </div>



            <Link to={"/login"}>
               <div className='text-sm font-semibold mt-4'>
            * If you already have an account, please log in ⏩
            </div> 
            </Link>
            
            </div>
        </div>
    </div>
       
    </div>
  )
}

export default SingUp