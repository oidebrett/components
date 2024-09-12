import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const InstanceModal = ({ show, handleClose, instanceName }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      fullscreen
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>{instanceName}</Modal.Title>
        <Button variant="outline-danger" onClick={handleClose}>
          X
        </Button>
      </Modal.Header>
      <Modal.Body>
        {/* Insert your form or content here */}
        <p>This is the content area where you can insert your form or other content.</p>
      </Modal.Body>
    </Modal>
  );
};

export default InstanceModal;
