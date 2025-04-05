import React from 'react'
import { Link as RouterLink } from "react-router-dom";

import Navbar from '../navbar'
import FlushWarrantyFooter from '../FlushWarrantyFooter'

function MyAccount() {
  return (
    <>
    <Navbar/>
    <div className='w-full max-w-screen-lg mx-auto mt-[80px]'>
      <h3 className='text-center mb-[80px] text-[60px] sm:text-[84px] leading-[96px] text-black font-extrabold'>My account</h3>

      <div className='px-[30px] xl:px-0'>
        <form action="">
          <h4 className='text-5xl text-black leading-[60px] font-bold mt-[60px] mb-[30px]'>Login</h4>

          <div className='flex flex-col mb-4'>
            <label className='text-black text-base leading-[24px] font-normal mb-[5px]'>Username or email address <span className='text-red-600'>*</span></label>
            <input type="email" className='border border-[#dcd7ca] py-[15px] px-[18px] outline-0' />
          </div>

          <div className='flex flex-col mb-4'>
            <label className='text-black text-base leading-[24px] font-normal mb-[5px]'>Password <span className='text-red-600'>*</span></label>
            <input type="password" className='border border-[#dcd7ca] py-[15px] px-[18px] outline-0' />
          </div>

          <div className='flex flex-row items-center mt-[10px] mb-[30px]'>
            <input type="checkbox" className='cursor-pointer' />
            <p className='text-base font-normal leading-[24px] text-black ml-1'>Remember me</p>
          </div>

          <button type='submit' className='text-[17px] leading-[21px] font-semibold hover:underline cursor-pointer bg-[#007BFF] text-white py-[19px] px-[25px] mb-[16px]'>LOG IN</button>

          <RouterLink to='/lost-password' className='text-base leading-[24px] text-[#cd2653] font-normal underline hover:no-underline block mb-4'>
            Lost your password?
          </RouterLink>
        </form>
      </div>
    </div>
    <FlushWarrantyFooter/>
    </>
  )
}

export default MyAccount