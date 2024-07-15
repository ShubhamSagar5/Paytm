import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import SingUp from './Pages/SingUp'
import LogIn from './Pages/LogIn'
import SendMoney from './Pages/SendMoney'
import Navbar from './Components/Navbar'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signup' element={<SingUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/send' element={<SendMoney/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>
  )
}

export default App