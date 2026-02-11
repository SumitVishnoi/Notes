import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center py-2 px-4 bg-[#212121] sticky top-0 z-10'>
        <div>
            <h1 className='font-bold text-xl text-white'>Notes Creator</h1>
        </div>
        <div className='flex items-center gap-4'>
            <h4 onClick={()=> navigate("/")} className='font-medium hover:border-b-2 border-[#AD4B26] cursor-pointer text-white'>Home</h4>
            <h4 onClick={()=> navigate("/notes")} className='font-medium hover:border-b-2 border-[#AD4B26] cursor-pointer text-white'>Notes</h4>
            <h4 onClick={()=> navigate("/asker")} className='font-medium hover:border-b-2 border-[#AD4B26] cursor-pointer text-white'>Asker</h4>
        </div>
        <div>
            <button className='bg-[#AD4B26] text-white font-medium px-5 py-2 cursor-pointer active:scale-95 rounded-md'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar