"use client";
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Modalpage from "@/app/components/Modalpage";

function Tabs() {
  const [showModal, setShowModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Fragment>
      <div className="container lg:w-[996px] lg:h-[533px] mx-auto bg-[#F4F4F4]">
        <div className="lg:w-[946px] lg:h-[92%] mt-5 mx-auto pt-[21px]">
          <div className="bloc-tabs w-[852px] mx-auto bg-[#F4F4F4] ">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>
              <span>Saving Account</span>
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }>
              <div className=" grid gap-[23px] grid-cols-3 grid-rows-2">
                <div className="bg-white rounded-md h-[196px] w-[300px] block drop-shadow-sm">
                  <div className="flex h-[70%] px-2 py-2">
                    <div className="pr-1 pt-1">
                      <img
                        className="h-[40px] w-[40px] "
                        src="/images/old-man.svg"
                        alt="man"
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] text-[#9B9B9B] mr-2 leading-6">
                        Premium Super Talab Khata
                      </h2>
                      <p className="my-[14px] text-[14px] text-[#9B9B9B]">
                        7.133% p.a
                      </p>
                      <p className="text-[14px] text-[#9B9B9B]">
                        Minimum balance NPR 0/-
                      </p>
                    </div>
                  </div>
                  <div className="text-center p-[10px]">
                    <Link
                      className="bg-[#E53E3E] px-5 mr-6 py-2 text-[14px] rounded-md text-white"
                      href="/">
                      Apply Now
                    </Link>
                    <Link
                      className="border-[1px] px-7 py-2 border-[#E53E3E] rounded-md text-[#E53E3E] text-[14px]"
                      href="#"
                      onClick={() => setShowModal(true)}>
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modalpage isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}

export default Tabs;
