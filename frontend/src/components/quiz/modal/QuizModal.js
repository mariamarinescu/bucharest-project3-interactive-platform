import React from 'react';



const QuizModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

  export default QuizModal;