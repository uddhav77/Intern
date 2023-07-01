import dayjs from 'dayjs'
import React from 'react'

const VehicleInput = () => {
    const poo = dayjs()
    console.log(poo.format())
    console.log(poo.hour(),poo.date(),poo.second())
  return (
    <div>
      
    </div>
  )
}

export default VehicleInput
