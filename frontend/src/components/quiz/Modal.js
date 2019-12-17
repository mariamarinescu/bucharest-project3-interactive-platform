import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';



const QuizModal = () => {
  const fireworks = <div class="yeey">
  <div class="before"></div>
  <div class="after"></div>
</div>;

return(
  <div>
<Modal
    show={this.props.show}
    onHide={this.props.handleClose}
  >
    <Modal.Header closeButton>

      <Modal.Title>
       {this.props.title}
      </Modal.Title>

    </Modal.Header>

    <Modal.Body>

      {this.props.description}

      <p className="red-quiz-modal-message">
        {this.props.lastMessage}
      </p>
      { this.props.show ? fireworks : null}
      {/* <div class="yeey">
        <div class="before"></div>
        <div class="after"></div>
      </div> */}

    </Modal.Body>

    <Modal.Footer>
      <img
        src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png"
        alt="logo"
      />
    </Modal.Footer>

  </Modal>
  </div>
)
  
}


export default QuizModal;