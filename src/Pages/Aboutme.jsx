import React from 'react'
import './Aboutme.css'
import pic from '../Components/Assets/maria_xenaki_pic1.jpg'
import DownloadLink from '../Components/DownloadLink'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { skills, softSkills, languages, unis, certifications, works } from '../Context/Data';
import { FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Aboutme = () => {

  const { t } = useTranslation();

  
  const skillRows = skills.map((skill=>
    <tr className='r3'>
    <td>{t(skill.skill)}</td>
    <td>{t(skill.level)}</td>
    <td>{skill.proficiency}</td>
    </tr>
  ));

  const softSkillRows = softSkills.map((softSkill=>
    <tr>
    <td>{t(softSkill.sskill)}</td>
    </tr>
  ));
  const languageRows = languages.map((language =>
    <tr>
    <td>{t(language.language)}</td>
    <td>{t(language.level)}</td>
    <td>{language.proficiency}</td>
  </tr>
  ));
const filteredCertifications = certifications.slice(0,-2);
  
const certificationRows = filteredCertifications.map((certification => 
  <tr>
    <td>{certification.title}</td>
    <td>{certification.institution}</td>
    <td><Link to={certification.link} target="_blank" >{certification.icon}</Link></td>
  </tr>));

const lastCertifications = certifications.slice(-2).map((certification=>
  <tr>
    <td>{t(certification.title)}</td>
    <td>{t(certification.institution)}</td>
  </tr>));

 const uniRows = unis.map((uni => 
  <tr>
    <td>{uni.dates}</td>
    <td>{t(uni.title)}</td>
    <td>{t(uni.university)}</td>
  </tr>
));  

const workRows = works.map((work =>
  <tr>
    <td>{work.dates}</td>
    <td>{t(work.department)}{t(work.title)}<br/>{t(work.tasks)}
    </td>
  </tr>            
));

  
  return (
    <div className='main-am'>
        <div className='col m flex' id='about-me'>
          <div className='about-me-text'>
     
          <p>{t('intro1')} <b> junior front-end developer.</b><br/>
          <b>{t('intro2')} </b> {t('intro2a')} <b>{t('intro2b')}</b> {t('intro2c')} <br/>
          {t('intro3')} <b>{t('intro3a')}</b>
          {t('intro4')}<b>{t('intro4a')}</b> development.</p>

              <p>
                <br/>
                {t('intro5')} <DownloadLink/> {t('intro5a')} <a className='gh-link'target="_blank" rel="noreferrer" href="https://github.com/maria-xenaki" style={{color:'inherit'}}><FaGithub className='gh-icon' style={{cursor:'pointer'}}/></a>
              </p>
          </div>
        <div className='image'>
          <img src={pic} alt="maria_xenaki_photo" />
        </div>
      </div>
      <div className='col3'>
        <div className="col m d-3">
          <div className='title'>{t('Skills')}</div><br />
          <Table hover className='tables'>    
          <tbody>
            {skillRows}
          </tbody>
          </Table>
        </div>
        <div className="col m d-3">
          <div className='title'>{t('Soft Skills')}</div><br />
          <Table hover className='tables'style={{textAlign:'center'}}>    
          <tbody>
            {softSkillRows}
          </tbody>
          </Table>
        </div>
        
        <div className="col m d-3">
          <div className='title'>{t('Languages')}</div><br />
          <Table hover className='tables'>    
          <tbody>
            {languageRows}
          </tbody>
          </Table>
        </div>
      </div>
        <div className="col m">
          <div className='title'>{t('Education')}</div><br />
            <Table hover>
              <tbody>
              {uniRows}
              </tbody>
            </Table>
        </div>
        <div className="col m">
          <div className='title'>{t('Certifications')}</div><br />
          <Table hover >
            <tbody>
              {certificationRows} 
            </tbody>
          </Table><br />
          <p className='title-sm'>{t('Other')}:</p><br />
          <Table hover>
            <tbody>
              {lastCertifications}
            </tbody>
          </Table>
        </div>
      <div className='col m'>
        <div className='title'>{t('experience')}</div><br />
        <p className='title-sm' style={{textAlign:'left'}}>{t('NBG')}</p>
        <Table hover>
          <tbody>
            {workRows}
          </tbody>
        </Table>      
      </div>
    </div>
  
  )
}

export default Aboutme

