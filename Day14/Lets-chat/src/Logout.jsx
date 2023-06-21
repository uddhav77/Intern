import React from 'react'

const Logout = () => {

    const handleLogout=()=>{
            localStorage.clear()
            window.location.reload()
    }

  return (
    <>
   

    <button className='logout' onClick={handleLogout}>Log Out</button>

    </>
  )
}

export default Logout
