import React, { useState } from 'react';
import  Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function TelLink() {
  const { t } = useTranslation();

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
      <text style={{color:'white', fontSize:'15px', cursor:"pointer"}}> +30 6943 075 382 </text>
    </text>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header ></Modal.Header>
    <Modal.Body>{t('Telephone number +30 6943 075 382 copied to clipboard!')}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
    </Modal>
  </>
  );
}

export default TelLink;







