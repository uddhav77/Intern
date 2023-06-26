import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex p-6 w-full justify-between relative'>

         <div className="text-4xl font-bold ml-20 ">
          <NavLink to="/">NDLE</NavLink>
        </div>

        <div className="flex-1 ml-48 mt-2">
          <ul className="flex gap-10 ">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>

            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        <div className='flex ' >
            <button className='bg-white text-black p-2 w-20 rounded-2xl mr-72 hover:bg-blue-300 hover:text-white'>Sign in</button>
        </div>

    </div>
    </>
  )
}

export default Navbar
