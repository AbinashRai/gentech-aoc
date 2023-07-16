"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const Newpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen">
      <button
        className="border-solid border-2 p-2"
        onClick={() => setIsOpen(true)}>
        Open modal
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        this is a modal
      </Modal>
      <div className="h-24 bg-slate-300">Other Content</div>
    </div>
  );
};

export default Newpage;
