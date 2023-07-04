import Link from "next/link";
import "../globals.scss";

const Footer = () => {
  return (
    <div className=" lg:w-[1080px] mx-auto border-2 border-t-0 sticky bottom-0 z-10 bg-white">
    <div className='max-[1024px]:w-[83%] max-[640px]:text-[11px] lg:w-[928px] mx-auto h-[58px] bg-white flex md:justify-between items-center md:text-[12px] font-semibold max-[640px]:flex-col max-[640px]:justify-center'>
      <div className="mr-4">Copyright © 2023. All rights reserved. Abc bank</div>
      <div className="cursor-pointer mr-1 flex justify-normal items-center max-[640px]:justify-center">
        <span className="mr-2 max-[640px]:text-[11px] md:text-[12px] ">Powered by:</span>
            <Link href="/">
            <img className="w-[80px] max-[640px]:h-[30px] md:h-[34px]" src="/images/Frame 7.png" alt="logo" />
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Footer
