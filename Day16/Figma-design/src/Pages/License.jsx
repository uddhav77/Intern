import React from 'react'
import LicenseData from './LicenseData'
import DataEntry from '../Components/DataEntry'

const License = () => {
  return (
    <div>
      <LicenseData/>
       <div>
        <DataEntry text="Search Data Using License No"
                input = {<input className='p-2 w-[470px] rounded-[24px] bg-gray-200' type="text" placeholder="       Enter license number"/>}
        />
       </div>
    </div>
  )
}

export default License
