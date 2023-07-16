"use client";
import React from "react";

import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Modalpage from "@/app/components/Modalpage";

function page() {
  const [showModal, setShowModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="lg:w-[1080px] mx-auto bg-[#f6f9fa] h-screen">
      <div className="text-center">
        <h1 className="font-semibold">ONLINE ACCOUNT OPENING</h1>
        <h2 className="font-light">Pick an account type</h2>
        <p className="w-[83%] mx-auto border-[1px] rounded-[8px] text-[#CCC1C1] bg-[#FCF8E3] border-[#EBE1E1]">
          (Please note that the customer needs to visit the concerned branch
          with original identification documents to complete the account opening
          procedure. Until then, the account will be debit restricted and only
          credit transactions will be allowed in the account.)
        </p>
      </div>

      <div className="drop-shadow-md">
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
          <Modalpage
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
        </Fragment>
      </div>
    </div>
  );
}

export default page;
