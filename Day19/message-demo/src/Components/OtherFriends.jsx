import React from 'react'

const OtherFriends = ({image, name, message, status}) => {
  return (
    <div className='flex gap-4'>
      <img src={image} alt="profile" className='h-12 w-12 rounded-full'/>
        <div>
        <div className='text-lg font-semibold'>{name}</div>
        <div className='flex text-gray-500 items-end'>
        <div className='flex text-xs'>{message}</div>
        <p className='text-[10px]'>{status}</p>
        </div>
        </div>
    </div>
    
    
  )
}

export default OtherFriends
