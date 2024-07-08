import React from 'react'
import WelcomeModal from '../Components/Welcome';
import Typewriter from '../Components/typewriter';
import DownloadLink from '../Components/DownloadLink';
import { Link } from 'react-router-dom';
import './Homepage.css'
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <WelcomeModal/>
        <div className='main'>
        <div className='text'>
   
          <p><i><b>{t("Hello")}</b> <Typewriter text= {t("welcome")} delay={100} /></i><br /> 
      
     
          {t("I am")} <b>{t("Maria")}</b>, {t("a")} <b>front-end developer</b>, <br className='brh'/> {t("working")} <br/>

          <i>{t("hear")} </i></p>

      <div className='column_direction'>{t('download')} <DownloadLink/> <br className='brh'/> <br className='brh'/>{t('learn')} <Link to='/about_me' style={{color:"white"}}><Button variant='secondary' className='button'> {t('here')} </Button> </Link></div>
      
      
    

        </div>
     </div>
     </div>
  
  )
}

export default Homepage

