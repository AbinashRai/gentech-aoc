import Link from 'next/link';
import React from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='w-[375px] mx-auto border-2 border-b-0 md:w-[768px]'>
      
      <div className='container h-[58px] flex justify-normal items-center'>
        <div className="cursor-pointer">
            <Link href="/">
            <img className="w-[80px] h-[34px]" src="/images/Frame 7.png" alt="logo" />
            </Link>
        </div>
      <h1 className='pl-[18px] text-[12px]'>ONLINE ACCOUNT OPENING PORTAL</h1>
      <button className='text-black text-xs border-2 ml-auto mr-0 rounded-md p-1 flex justify-normal items-center'>
        English <AiOutlineCaretDown/>
      </button>
        </div>
    </div>
    
  )
}

export default Navbar
