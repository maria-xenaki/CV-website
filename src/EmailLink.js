import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function EmailLink() {
  const { t } = useTranslation();

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
        <Modal.Header ></Modal.Header>
        <Modal.Body>{t('Email address mariaaxenaki@gmail.com copied to clipboard!')}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmailLink;

