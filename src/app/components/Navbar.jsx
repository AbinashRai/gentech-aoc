import Link from 'next/link';
import React from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div>
      <div className='container h-[58px] flex justify-normal items-center'>
        <div className="cursor-pointer">
            <Link href="/">
            <img className="w-[80px] h-[34px]" src="/images/Frame 7.png" alt="logo" />
            </Link>
        </div>
      <h1 className='pl-12 text-[12px]'>ONLINE ACCOUNT OPENING PORTAL</h1>
      <button className='text-black text-xs border-2 ml-auto mr-0 rounded-md p-1 flex justify-normal items-center'>
        English <AiOutlineCaretDown/>
      </button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
