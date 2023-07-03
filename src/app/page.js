import { FiCheckCircle } from "react-icons/fi";
import "./globals.scss";
import { GrRadialSelected } from "react-icons/gr";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className=" lg:w-[1080px] mx-auto bg-slate-100">
      <div className="max-[1024px]:w-[83%] lg:w-[928px] mx-auto h-[553px] flex justify-between max-[640px]:block">
        <div className="w-auto">
          <div className="w-[160px] md:w-[214px] h-[28px] lg:mt-[81px] md:mt-[55px]">
            <h3 className="flex justify-normal items-center max-[640px]:pt-6">
              <span className="h-[18px] w-[18px]">
                <FiCheckCircle />
              </span>
              <span className="ml-2 md:text-[16px] text-[13px]">
                Most trusted platform
              </span>
            </h3>
          </div>
          <div className="mt-[16px] max-[640px]:mt-[20px]">
            <h1 className="text-[21px] sm:text-[25px] md:text-[30px] lg:text-[45px] font-semibold">
              Welcome To <br /> Online Account Portal
            </h1>
            <div className="max-[640px]:w-[250px] md:w-[366px] h-[137px] max-[640px]:pt-[10px] lg:pt-[38px] md:pt-[18px]">
              <ul className="text-[12px] lg:text-[16px] md:text-[14px]">
                <li className="sm:mb-[11px] max-[640px]:mb-[6px] flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">Scalable and Robust</span>
                </li>
                <li className="sm:mb-[11px] max-[640px]:mb-[6px]  flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">
                    Third party Integration Like Nagarik App
                  </span>
                </li>
                <li className="sm:mb-[11px] max-[640px]:mb-[6px]  flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">OCR Scan</span>
                </li>
                <li className="sm:mb-[11px] max-[640px]:mb-[6px] flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">Debit Card</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[360px] lg:w-[436px]  md:w-[272px] max-[640px]:w-full">
          <div className="lg:h-[470px] md:h-[366px] max-[640px]:h-[275px] md:mt-[43px] lg:mt-[62px] bg-white rounded-2xl sm:w-[274px] md:w-[272px] lg:w-[436px]">
            <div className="lg:h-[392px] md:h-[324px] max-[640px]:h-[250px] pt-[7px] border-b-2 w-[245px] lg:w-[371px] md:w-[238px]  mx-auto">
              <img
                className="w-[180px] lg:w-[284px] md:w-[226px]  h-[120px] md:h-[150px] lg:h-[190px] max-[1024px]:mx-auto max-[1024px]:w-[80%] lg:ml-[47px]"
                src="/images/Apply-for-a-loan-8 1.png"
                alt="home-image"
              />
              <div className="mx-auto w-[235px] lg:w-[297px] md:w-[238px]  text-zinc-500 max-[640px]:pt-[5px] md:pt-[19px] text-[13px] md:text-[14px] lg:text-[15px]">
                <p>
                  Open your Saving or Fixed Desposit account in just a Few
                  Steps...
                </p>
                <div className="mx-auto">
                  <Link
                    className="flex mx-auto text-[10px] md:text-[14px] max-[640px]:mt-[15px] bg-[#F03738] text-white w-[130px] md:w-[194px] h-[40px] rounded-lg md:mb-[35px] md:mt-[25px] lg:mb-[55px] lg:mt-[36px]"
                    href="/">
                    <span className="flex justify-normal items-center mx-auto">
                      Open a New Account
                      <span className="ml-0.5 md:ml-2 text-sm md:text-lg">
                        <FiArrowRight />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
