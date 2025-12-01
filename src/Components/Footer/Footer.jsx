import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import EmailLink from '../../EmailLink';
import TelLink from '../../TelLink';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();
  
   const currentYear = new Date().getFullYear();

  return (
    <div className='footer mt-auto'>
      <div className='footer-contents'>
        <p className='contact'>{t('Contact')}:</p><br />
        <ul className='footer-links'>
          <ul className='email-ul'><TfiEmail/> <EmailLink/> </ul>
          <ul><BsTelephone/> <TelLink/></ul>
          <ul><Link to="https://www.linkedin.com/in/mxenaki" target="_blank">Linked<FaLinkedin/></Link></ul>
        </ul>
        <p className='contact'><h7>Copyright © {currentYear}, MariaXenaki. All rights reserved.</h7></p>
        
      </div>
    </div>
  )
}

export default Footer