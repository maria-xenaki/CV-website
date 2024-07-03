import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const WelcomeModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has visited before
    if (!localStorage.getItem('visited')) {
      // Show the welcome modal
      setShow(true);

      // Set a flag in localStorage to indicate the user has visited
      localStorage.setItem('visited', 'true');
    }
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thank you for visiting my website.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
