import React, {useState} from 'react';
import './Navbar.css';
import logo from '../Assets/mx.png';
import { Link } from 'react-router-dom';
import DayNightToggler from '../DayNightToggler';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNight, setIsNight] = useState(false);

  const toggleTheme = () => {
    setIsNight(!isNight);
    document.body.classList.toggle('night-mode', !isNight);
  };


  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    
  return (
    
    <div className='navbar'>
        <div className='nav-logo'>
       
            <Link to='/'><img className='mx'src={logo} alt="maria xenaki logo" /></Link>
        </div>
        <p className='maria-xenaki'>{t('Maria')}</p>
        <br></br>
        <ul className="nav-menu">
            <li><Link to='/about_me'className='about-me'>{t('About me')}</Link></li>
            <li><Link to='/contact_me' className='contact-me'>{t('Contact me')} </Link></li>
            
            <li><DayNightToggler onToggle={toggleTheme} isNight={isNight}/></li>
            <li>
              <Dropdown className='lang' data-bs-theme="dark" >
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='lang2'><CiGlobe/></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => changeLanguage('en')}>en</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={() => changeLanguage('gr')}>gr</Dropdown.Item>
                    </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown data-bs-theme="dark" >
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className='lang2'><GiHamburgerMenu/></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item><Link to= '/' style={{textDecoration:'none'}} >{t('Homepage')}</Link></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item><Link to= '/about_me' style={{textDecoration:'none'}}>{t('About me')}</Link></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item><Link to= '/contact_me' style={{textDecoration:'none'}}>{t('Contact me')}</Link></Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </li>
        </ul>
            
    </div>
        

   
  )
}

export default Navbar
