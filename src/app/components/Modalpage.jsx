"use client";

import { useEffect } from "react";
import { GrClose } from "react-icons/gr";

const Modalpage = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("blur");
    } else {  
      document.body.classList.remove("blur");
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleBackgroundClick}>
      <div className="w-[500px] h-[300px] text-center bg-white rounded-lg flex flex-col no-blur">
        <div className="place-self-end">
          <button className="pr-3 pt-3" onClick={() => onClose()}>
            <GrClose />
          </button>
        </div>
        <div className="p-5 pt-0">
          <h1 className="text-lg font-semibold">Modal</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            fugiat magnam saepe debitis sint cupiditate, voluptates doloribus
            harum ducimus hic assumenda illum praesentium quisquam, fuga
            delectus, deserunt voluptate repellendus aut! lorem Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quos similique ipsa
            explicabo atque assumenda aperiam deleniti aliquid a, adipisci
            voluptatem incidunt fuga, nostrum maxime? Asperiores labore quasi
            sequi a quidem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modalpage;
