"use client";
import { useState } from "react";
import Link from "next/link";


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container lg:w-[996px] lg:h-[533px] mx-auto bg-[#f6f9fa]">
      <div className="lg:w-[946px] lg:h-[92%] mt-5 mx-auto bg-[#f6f9fa]">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            Tab 1
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>
            Tab 2
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>
            Tab 3
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}>
            Tab 4
          </button>
          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}>
            Tab 5
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }>
            <div className=" grid gap-4 grid-cols-3 grid-rows-2">
              <div className="bg-white rounded-md h-[196px] w-[300px] block drop-shadow-sm">
                <div className="flex h-[70%] px-2 py-2">
                  <div className="pr-1 pt-1">
                   <img  className="h-[40px] w-[40px] " src="/images/old-man.svg" alt="man" />
                  </div>
                  <div>
                  <h2 className="text-[20px] text-[#9B9B9B] mr-2 leading-6">Premium Super Talab Khata</h2>
                  <p className="my-[14px] text-[14px] text-[#9B9B9B]">7.133% p.a</p>
                  <p className="text-[14px] text-[#9B9B9B]">Minimum balance NPR 0/-</p>
                  </div>
                </div>
                <div className="text-center p-[18px]">
                  <Link className="bg-[#E53E3E] px-5 mr-6 py-2 text-[14px] rounded-md text-white" href="/">Apply Now</Link>
                  <Link className="border-[1px] px-7 py-2 border-[#E53E3E] rounded-md text-[#E53E3E] text-[14px]" href="/">Details</Link>
                </div>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }>
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }>
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }>
            <div className=" grid gap-4 grid-cols-3 grid-rows-2">
              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }>
            <div className=" grid gap-4 grid-cols-3 grid-rows-2">
              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>

              <div className="bg-white">
                <h2>Premium Super Talab Khata</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
