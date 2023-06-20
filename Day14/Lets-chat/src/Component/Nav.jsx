import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    
    <div className='navbar'>

        <div className="menu">
            <ul>
                <li>
                <NavLink to="/" style={{textDecoration:'none'}}>Home</NavLink> 
                </li>

                <li>
                <NavLink to="/login"  style={{textDecoration:'none'}}>Login</NavLink> 
                </li>

                <li>
                <NavLink to="/register"  style={{textDecoration:'none'}}>Register</NavLink> 
                </li>

                <li>
                <NavLink to="users"  style={{textDecoration:'none'}}>Users</NavLink> 
                </li>

            </ul>
        </div>
    </div>
    
    </>
  )
}

export default Nav
