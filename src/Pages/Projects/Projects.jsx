import React from "react";
import { projects }  from "../../Context/Data";
import './Projects.css';
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import '../../App';


const Projects = () => {
  
  const { t } = useTranslation();

  return (
    <div className="projects-page container">
        <h4 className='title-cm'><b>Projects</b></h4>
      
            {projects.map((project) => (
              <Row key={project.id} className="align-items-center mb-5 project-row">
                
                {/* Left column: icon */}
                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.icon}
                alt={project.name}
                className="img-fluid project-img"
              />
            </Link>
          </Col>

                {/* Right column: description */}
          <Col xs={12} md={8}>
            <Link to={project.link} className="links"><h4><b>{project.name}</b></h4></Link>
            <p><b>{t(project.description1)}</b></p>
            <p>{t(project.description2)}</p>
          </Col>
        </Row>
      ))}

    </div>
  );
};

export default Projects


