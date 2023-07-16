const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed top-[-50%] left-[-50%] bg-white transform translate-x-[-50] translate-y-[-50] padding-5 z-10">
      <button onClick={onClose} className="border-2 p-4">
        Close modal
      </button>
      {children}
    </div>
  );
};

export default Modal;
