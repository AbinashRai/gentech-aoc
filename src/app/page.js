import { FiCheckCircle } from "react-icons/fi";
import "./globals.scss";
import { GrRadialSelected } from "react-icons/gr";

export default function Home() {
  return (
    <div className="container h-[553px] flex justify-between bg-slate-100">
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
      <div className="w-[436px] bg-slate-100">
        <div className="h-[470px] mt-[62px] bg-white rounded-2xl">
          <div>
            <img
              className="w-[284px] h-[190px] ml-[79px] mt-[26px]"
              src="/images/Apply-for-a-loan-8 1.png"
              alt="home-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
