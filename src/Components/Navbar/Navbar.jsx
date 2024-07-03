import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/mx.png'
import { Link } from 'react-router-dom'
import DayNightToggler from '../DayNightToggler'
import { DropdownButton, Dropdown} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

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
            

            <li>
              <DropdownButton data-bs-theme="dark">
                <Dropdown.Item><Link to= '/' style={{textDecoration:'none'}} >Homepage</Link></Dropdown.Item>
                <Dropdown.Item><Link to= '/about_me' style={{textDecoration:'none'}}>About me</Link></Dropdown.Item>
                <Dropdown.Item><Link to= '/contact_me' style={{textDecoration:'none'}}>Contact me</Link></Dropdown.Item>
              </DropdownButton> 
            </li>
            <li><DayNightToggler onToggle={toggleTheme} isNight={isNight}/></li>
        </ul>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('gr')}>Greek</button>
    </div>
        

   
  )
}

export default Navbar
