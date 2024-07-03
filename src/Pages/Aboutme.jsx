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
    <td>{skill.skill}</td>
    <td>{skill.level}</td>
    <td>{skill.proficiency}</td>
    </tr>
  ));

  const softSkillRows = softSkills.map((softSkill=>
    <tr>
    <td>{softSkill.sskill}</td>
    </tr>
  ));
  const languageRows = languages.map((language =>
    <tr>
    <td>{t(language.language)}</td>
    <td>{language.level}</td>
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
    <td>{certification.title}</td>
    <td>{certification.institution}</td>
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
            <p>{t('intro1')}</p>
            

        
          <p>Highly motivated <b>junior front-end developer.</b><br/>
          <b>Avid learner </b> with a growing proficiency in <b>React JS and HTML/CSS,</b> among others. <br/>
          Proven ability and extensive experience in <b>problem solving, teamwork, and customer service</b>, 
          transitioning from a successful career in banking to pursue a passion for <b>full-stack</b> development.</p>

              <p>
                <br/>
                    You can download my CV <DownloadLink/> and visit my (small-but-growing) GitHub <a className='gh-link'target="_blank" href="https://github.com/maria-xenaki" style={{color:'inherit'}}><FaGithub className='gh-icon' style={{cursor:'pointer'}}/></a>.
              </p>
          </div>
        <div className='image'>
          <img src={pic} alt="maria_xenaki_photo" />
        </div>
      </div>
      <div className='col3'>
        <div className="col m d-3">
          <div className='title'>{t('Skills')}</div><br />
          <Table  className='tables'>    
          <tbody>
            {skillRows}
          </tbody>
          </Table>
        </div>
        <div className="col m d-3">
          <div className='title'>{t('Soft Skills')}</div><br />
          <Table  className='tables'style={{textAlign:'center'}}>    
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
            <Table >
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
          <Table >
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

