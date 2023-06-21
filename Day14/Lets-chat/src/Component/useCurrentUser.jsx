import React from 'react'

const useCurrentUser = () => {

    const getId = localStorage.getItem("id")
    const getEmail = localStorage.getItem("email")
    const getMessage = localStorage.getItem("message")
  return (
    <div>
       {/* { getId && getEmail && getMessage? } */}
    </div>
  )
}

export default useCurrentUser
