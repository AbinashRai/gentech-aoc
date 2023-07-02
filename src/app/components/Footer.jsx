import Link from "next/link";
import "../globals.scss";

const Footer = () => {
  return (
    <div className=" lg:w-[1080px] mx-auto border-2 border-t-0">
    <div className='max-[1024px]:w-[83%] lg:w-[928px] mx-auto h-[58px] bg-white flex justify-between items-center text-[12px] font-semibold'>
      Copyright © 2023. All rights reserved. Abc bank
      <div className="cursor-pointer mr-1 flex justify-normal items-center">
        <span className="mr-2 text-[12px]">Powered by:</span>
            <Link href="/">
            <img className="w-[80px] h-[34px]" src="/images/Frame 7.png" alt="logo" />
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Footer
