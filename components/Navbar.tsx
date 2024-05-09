import React from 'react'
import {logout} from '@/app/Logout/actions'


const Navbar = () => {
  return (
    <div className='bg-custom-bg p-5 flex justify-between text-white'>
    <h1 className="text-3xl font-bold">
         CHIMONEY-APP
    </h1>

<div className='flex gap-20'>
  <form action={logout}>
  <button className='border-white border-2 p-3 rounded-md hover:scale-125' type='submit'>
      Log Out
     
    </button>
  </form>
  
    </div>
    

    </div>
  )
}

export default Navbar

