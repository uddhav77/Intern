import React from 'react'
import Nav from './Component/Nav'

const Logout = () => {

    const handleLogout=()=>{
            localStorage.clear()
            window.location.reload()
    }

  return (
    <>
    <div>
      <Nav/>
    </div>

    <button className='logout' onClick={handleLogout}>Log Out</button>

    </>
  )
}

export default Logout
