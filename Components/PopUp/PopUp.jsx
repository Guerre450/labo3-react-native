import "./PopUp.css"

//source : https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
import  { useRef, useEffect } from 'react';

const PopUp = ({ isOpen, hasCloseBtn = true, onClose, content}) => {
    const modalRef = useRef(null);
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      {hasCloseBtn && (
        <div className="modal-container">
        <div className="button-container">
          <button className="modal-close-btn" onClick={handleCloseModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="black" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
        </button>
        </div>
            {content()}
        </div>

      )}
    </dialog>
  );
};

export default PopUp