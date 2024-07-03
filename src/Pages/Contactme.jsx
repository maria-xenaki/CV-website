import {React} from 'react'
import'./Contactme.css'
import ContactForm from '../Components/ContactForm'
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import EmailLink from '../EmailLink';
import TelLink from '../TelLink';
import { Button} from 'react-bootstrap';

const Contactme = () => {

  return (
    <div className='main-contact'>
      
       
        <p className='title-cm'><b>Contact me:</b></p>
        <div className='contact-div'>
      <ul className='etc'>
        <ul style={{marginLeft:'0px'}}>
          <Button variant='secondary'><TfiEmail/> <EmailLink/></Button>
        </ul>
        <ul><Button variant='secondary'><BsTelephone/> <TelLink/></Button></ul>
        <ul><Button variant='secondary'><Link to="https://www.linkedin.com/in/maria-xenaki-front-end" target="_blank"><text style={{color:'white', fontSize:'15px'}}>Linked</text><FaLinkedin /></Link></Button></ul>
        </ul>
     
        </div>
        <div className='form-cf'>
      <ContactForm/>
        </div>

    </div>
  )
}

export default Contactme


