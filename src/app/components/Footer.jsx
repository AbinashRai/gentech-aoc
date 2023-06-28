import Link from "next/link";
import "../globals.scss";

const Footer = () => {
  return (
    <div className='container h-[58px] bg-white border-2 flex justify-between items-center text-[12px] font-semibold'>
      Copyright © 2023. All rights reserved. Abc bank
      <div className="cursor-pointer mr-1 flex justify-normal items-center">
        <span className="mr-1 text-[12px]">Powered by:</span>
            <Link href="/">
            <img className="w-[80px] h-[34px]" src="/images/Frame 7.png" alt="logo" />
            </Link>
        </div>
    </div>
  )
}

export default Footer
