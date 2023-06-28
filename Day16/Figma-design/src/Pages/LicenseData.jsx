import React from 'react'
import { NavLink } from 'react-router-dom'

const LicenseData = () => {
  return (
    <>
        <div className='ml-[106px] mt-10'>
            <div className='text-[36px] font-[600]'>
                License Data
            </div>

            <div className='mt-8 text-xl'>
                <ul className='flex justify-between w-4/5'>
                    <NavLink style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isPending ? "red" : "white",
                  };
                }} to="/refence">
                     <li>Reference NO</li>
                    </NavLink>
                    <NavLink style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isPending ? "red" : "white",
                  };
                }} to="/applicantid">
                    <li>Applicant ID</li>
                    </NavLink>
                    <NavLink style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isPending ? "red" : "white",
                  };
                }} to="/licenseno">
                    <li>License NO</li>
                    </NavLink>
                </ul>
            </div>

        </div>
    </>
  )
}

export default LicenseData
