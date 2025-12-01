import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
//import { CiGlobe } from "react-icons/ci";
import DayNightToggler from '../DayNightToggler';
import logo from '../Assets/mx.png';
import './Navbar.css';
import LanguageSelector from '../LanguageSelector';

const MyNavbar = () => {
  const [isNight, setIsNight] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  
  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    setIsNight(!isNight);
    document.body.classList.toggle('night-mode', !isNight);
  };

  //const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const handleShow = () => setShowOffcanvas(true);
  const handleClose = () => setShowOffcanvas(false);

  return (
    <Navbar variant="dark" expand="md" fixed="top" className="px-3 bg-bl shadow">
      <Container fluid>
        {/* Logo and Name */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="Maria Xenaki Logo" height="40" className='nav-center'/>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/"> 
          <span>{t('Maria')}</span>
        </Navbar.Brand>

        {/* Desktop Links */}
        <Navbar.Collapse className="justify-content-end d-none d-md-flex">
          <Nav className="align-items-center gap-3">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact_me">{t('Contact me')}</Nav.Link>
            <Nav.Link as={Link} to="/about_me">{t('About me')}</Nav.Link>
            <Nav.Item>
              <DayNightToggler className='daynight-nav' onToggle={toggleTheme} isNight={isNight} />
            </Nav.Item>

              {/* Language Toggle */}
            <Nav.Item>
              <LanguageSelector/>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        {/* Mobile Toggle */}
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          onClick={handleShow} 
          className="d-md-none"
        />

        {/* Mobile Offcanvas */}
        <Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          className="bg-bl text-white"
        >
          <Offcanvas.Header closeButton closeVariant="white"/>
            <Offcanvas.Body>
            <Nav className="flex-column gap-3 flex-grow-1">
              <Nav.Link as={Link} to="/projects" onClick={handleClose} className="text-white">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact_me" onClick={handleClose} className="text-white">
                {t('Contact me')}
              </Nav.Link>
              <Nav.Link as={Link} to="/about_me" onClick={handleClose} className="text-white">
                {t('About me')}
              </Nav.Link>

              <div className="my-2 border-top border-light"></div>


              <div className='settings-right'>
              <Nav.Item>
                <DayNightToggler onToggle={toggleTheme} isNight={isNight} />
              </Nav.Item>

                <div className="my-2 border-top border-light"></div>
              <Nav.Item>
                  <LanguageSelector mobile onLanguageChange={handleClose} />
              </Nav.Item>
            </div>


            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;