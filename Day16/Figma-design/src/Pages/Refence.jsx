import React from 'react'
import LicenseData from './LicenseData'
import DataEntry from '../Components/DataEntry'

const Refence = () => {
  return (
    <div>
      <LicenseData/>
       <div>
        <DataEntry text="Search Data Using Reference No"
                input = {<input className='p-2 w-[520px] rounded-[24px] bg-gray-200'  type="text" placeholder="      Enter reference number"/>}
        />
       </div>
    </div>
  )
}

export default Refence
