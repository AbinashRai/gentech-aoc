// 'use client';
import React from 'react'
import Tabs from './components/tabs'


const page = () => {
  return (
    <div className='lg:w-[1080px] mx-auto bg-[#f6f9fa] h-screen'>
      <div className='text-center'>
      <h1 className='font-semibold'>ONLINE ACCOUNT OPENING</h1>
      <h2 className='font-light'>Pick an account type</h2>
      <p className='w-[83%] mx-auto border-[1px] rounded-[8px] text-[#CCC1C1] bg-[#FCF8E3] border-[#EBE1E1]'>(Please note that the customer needs to visit the concerned branch with original identification documents to complete the account opening 
procedure. Until then, the account will be debit restricted and only credit transactions will be allowed in the account.)</p>
      </div>
      
      <div className='drop-shadow-md'>
        <Tabs/>
      </div>
    </div>
  )
}

export default page
