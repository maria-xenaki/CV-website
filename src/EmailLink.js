import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EmailLink() {
  const email = "mariaaxenaki@gmail.com";

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const copyToClipboard = (e) => {
    e.preventDefault(); 
      navigator.clipboard.writeText(email).then(() => {
      setShow(true);  
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <>
      <text onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
        <text style={{ color: 'white', fontSize: '15px' }}>mariaaxenaki@gmail.com</text>
      </text>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Email address copied to clipboard!</Modal.Body>
      </Modal>
    </>
  );
}

export default EmailLink;

