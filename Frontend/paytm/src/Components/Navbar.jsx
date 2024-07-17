import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { isSignIn } from '../atom'

const Navbar = () => {
  
  const navigate = useNavigate()
  const setsignIn = useSetRecoilState(isSignIn)

  
  const handleLogout = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("userId")
    navigate("/login")
    setsignIn(false)
    toast.success("LogOut Successfully ")
  }
  
  return (
    <div className=''>
        <div className=' mb-5 shadow-lg  '>
        <div className='flex justify-between'>
           <div className='h-20  mx-4 flex'>
                <img src="./public/logo.png" alt="" className='rounded-full shadow-blue' />
                <img src="./public/upi.png" alt="" />
            </div>
            <div className='flex items-center mx-5'>
            
              <Link to={"/"}><div className='mx-2 text-lg font-semibold'>Home</div></Link>  
              <Link to={""}><div className='mx-2 text-lg font-semibold'>About</div></Link>  
              <Link to={""}><div className='mx-2 text-lg font-semibold'>Services</div></Link>  
              <Link to={""}><div className='mx-2 text-lg font-semibold'>Contact</div></Link>  
              <button className='mx-2 text-lg text-white font-semibold bg-paytm p-1 rounded-lg' onClick={handleLogout} >SignOut</button>
            </div>
        </div>
           
        </div>
    </div>
  )
}

export default Navbar