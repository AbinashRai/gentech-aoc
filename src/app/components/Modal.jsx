import { ReactDOM } from "react";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)]">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-42 bg-slate-200">
        <button onClick={onClose} className="border-2 p-4">
          Close modal
        </button>
        {children}
      </div>
    </div>,

    document.getElementById("portal")
  );
};

export default Modal;
