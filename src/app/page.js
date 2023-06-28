import { FiCheckCircle } from "react-icons/fi";
import "./globals.scss";
import { GrRadialSelected } from "react-icons/gr";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-[1080px] mx-auto bg-slate-100 h-screen">
      <div className="container h-[553px] flex justify-between ">
        <div className="w-auto">
          <div className="w-[214px] h-[28px] mt-[81px]">
            <h3 className="flex justify-normal items-center">
              <span className="h-[18px] w-[18px]">
                <FiCheckCircle />
              </span>
              <span className="ml-2 text-[16px]">Most trusted platform</span>
            </h3>
          </div>
          <div className="mt-[16px]">
            <h1 className="text-[45px] font-semibold">
              Welcome To <br /> Online Account Portal
            </h1>
            <div className="w-[366px] h-[137px] pt-[38px]">
              <ul className="text-[16px]">
                <li className="mb-[11px] flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">Scalable and Robust</span>
                </li>
                <li className="mb-[11px] flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">
                    Third party Integration Like Nagarik App
                  </span>
                </li>
                <li className="mb-[11px] flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">OCR Scan</span>
                </li>
                <li className="mb-[11px] flex justify-normal items-center">
                  <GrRadialSelected />
                  <span className="pl-2">Debit Card</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[436px] ">
          <div className="h-[470px] mt-[62px] bg-white rounded-2xl w-[436px]">
            <div className="h-[392px] pt-[7px] border-b-2 w-[371px] mx-auto">
              <img
                className="w-[284px] h-[190px] ml-[47px]"
                src="/images/Apply-for-a-loan-8 1.png"
                alt="home-image"
              />
              <div className="mx-auto w-[297px] text-zinc-500 pt-[19px]">
                <p>
                  Open your Saving or Fixed Desposit account in just a Few
                  Steps...
                </p>
                <div className="mx-auto">
                  <Link
                    className="flex mx-auto text-[14px]  bg-[#F03738] text-white w-[194px] h-[40px] rounded-lg mb-[55px] mt-[36px]"
                    href="/">
                    <span className="flex justify-normal items-center mx-auto">
                      Open a New Account
                      <span className="ml-2 text-lg">
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
