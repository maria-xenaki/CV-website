import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function TelLink() {
  const tel = "+306943075382";

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const copyToClipboard = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigator.clipboard.writeText(tel).then(() => {
      setShow(true);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
  <>
    <text onClick={copyToClipboard} >
      <text style={{color:'white', fontSize:'15px'}}> +30 6943 075 382 </text>
    </text>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton></Modal.Header>
    <Modal.Body>Telephone number copied to clipboard!</Modal.Body>
    </Modal>
  </>
  );
}

export default TelLink;







