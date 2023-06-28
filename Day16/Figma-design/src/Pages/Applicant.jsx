import React from 'react'
import LicenseData from './LicenseData'
import DataEntry from '../Components/DataEntry'

const Applicant = () => {
  return (
    <div>
      <LicenseData/>
       <div>
        <DataEntry text="Search Data Using Applicant ID"
                input = {<input className='p-2 w-[470px] rounded-[24px] bg-gray-200'  type="text" placeholder="       Enter applicant id"/>}
        />
       </div>
    </div>
  )
}

export default Applicant
