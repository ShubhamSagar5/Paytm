import React from 'react'

const Input = ({label,value,placeholder,onchange}) => {
  return (
    <div className='flex flex-col mt-3 '>
        <label htmlFor={label}>{label+"*"}</label>
        <input className='p-1 my-2 border-b-2' onChange={(e)=>{
            onchange(e.target.value)
        }} type="text" name={label}  value={value} placeholder={placeholder} />
    </div>
  )
}

export default Input