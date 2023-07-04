'use client';
import { useState } from "react";
import Link from "next/link";
import { FaPersonCane } from "react-icons/fa";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container lg:w-[995px] lg:h-[533px] mx-auto bg-[#f6f9fa]">
        <div className="lg:w-[95%] lg:h-[92%] mt-5 mx-auto bg-[#f6f9fa]">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Tab 5
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <div className=" grid gap-4 grid-cols-3 grid-rows-2">

            <div className="bg-white rounded-md">
              <div> <div>
              <FaPersonCane />
              </div>

          <h2>Premium Super Talab Khata</h2>
          <p>7.133% p.a</p>
          <p>Minimum balance NPR 0/-</p>
              </div>
              <div>
              <Link href='/'>Apply Now</Link>
              <Link href='/'>Details</Link>
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
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
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
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
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
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
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
