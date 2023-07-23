import Link from "next/link";
import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="border-x-2 mx-auto lg:w-[1080px] max-[640px]:w-full sticky top-0 bg-white">
      <div className=" max-[1024px]:w-[83%] lg:w-[928px] mx-auto h-[58px] flex justify-normal items-center ">
        <div className="cursor-pointer">
          <Link href="/">
            <img
              className="w-[80px] h-[34px]"
              src="/images/Frame 7.png"
              alt="logo"
            />
          </Link>
        </div>
        <h1 className="pl-[18px] text-[12px] max-[640px]:hidden">
          ONLINE ACCOUNT OPENING PORTAL
        </h1>
        <button className="text-black text-xs border-2 ml-auto mr-0 rounded-md p-1 flex justify-normal items-center">
          English <AiOutlineCaretDown />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
