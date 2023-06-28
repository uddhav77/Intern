import React from 'react'
import {BiSearch} from 'react-icons/bi'

const LicenseStatus = () => {
  return (

        <div className='ml-[106px] mt-10'>
            <div className='text-[36px] font-[600]'>
                License Status
            </div>

            <div className='mt-10 flex flex-col items-center '>
                <div className='text-[24px] font-medium'>DOTM Web Service</div>
                <div>Smart License Printed Detail Status</div>
                <div className='text-[24px] font-medium mt-2'>Enter Smart License NO (Status)</div>
                <div className='relative'>
                <input className='p-2 w-[300px] rounded-[24px] bg-gray-300 mt-2'  type="text" placeholder='      Eg : 00-00-000000' />
                 <div className='absolute top-4 left-2 text-2xl text-black'><BiSearch/></div>
                </div>
            </div>
        </div>
    
  )
}

export default LicenseStatus
