import React from 'react'
import Typewriter from '../Components/typewriter';
import { Link } from 'react-router-dom';
import './Homepage.css';
import '../App';
import { useTranslation, Trans } from 'react-i18next';
//import { Container, Row, Col} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  const { t } = useTranslation();

  const carouselItems = [
  { src: "/gogreener.png", link: "https://www.gogreener.gr", alt: "www.gogreener.gr" },
  { src: "/madreamboutique.png", link: "https://www.madreamboutique.gr", alt: "www.madreamboutique.gr" },
 
];

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,      
  autoplaySpeed: 5000,
  pauseOnHover: true, 
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};


  const ImageCarousel = () => (
  <Slider {...settings}>
      {carouselItems.map((item, idx) => (
        <div key={idx} style={{ textAlign: "center" }} className="mt-2">
          <Link to={item.link} className="text-decoration-none"  target="_blank" rel="noreferrer">
            <img
              src={item.src}
              alt={item.alt}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                // width: "95%",
                width: "100%", 
                height: "300px", 
                objectFit: "cover",
                borderRadius: "8px" }}
            />
             <div
            style={{
              marginTop: "8px",
              fontWeight: "bold",
              color: "black",
              cursor: "pointer",
            }}
          >
           <span className='links'> {item.alt} </span>
          </div>
          </Link>
        </div>
      ))}
    </Slider>
    );

  return (
    <div>
      <div className="container-fluid d-flex flex-column min-vh-100 ">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8 text-center" style={{marginTop:"100px"}}>
      
      {/* Welcome text */}
      <p className="mb-4" style={{ lineHeight: "3" }}>
        <i><Typewriter text={t("welcome")} delay={100} /></i><br />
        {t("I am")} <b>{t("Maria")}</b> {t("a")} <b>web developer</b>.<br />
        {t("I create")} <b>custom</b> {t("static and dynamic websites, tailored to your goals and personal style, ")}<br />
        {t("as well as high-quality ")}<b>e-shops</b> {t("built on powerful CMS Platforms")}.<br />
        <Trans
          i18nKey="hear"
          components={{ 1: <Link to="/contact_me" className='links'/> }}
        />
      </p>

      {/* Action links */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        <Trans i18nKey="download" components={{ 1: <a href='/Maria_Xenaki_CV.pdf' className='links'/> }} />
        <Trans i18nKey="learn" components={{ 2: <Link to='/about_me' className='links' /> }} />
      </div>

      {/* Projects Carousel */}
      <div className='mt-5 mb-5'>
        <h3 className="text-dark fw-bold mb-3">
          <Link to='/projects' className='text-dark text-decoration-none'>Projects</Link>
        </h3>
        <ImageCarousel />
      </div>

    </div>
  </div>
</div>

        {/* <div className='main'>
        <div className='text'>
   
          <p><i><Typewriter text= {t("welcome")} delay={100} /></i><br /> 
      
     
          {t("I am")} <b>{t("Maria")}</b>{t("a")} <b>web developer</b>. 
          <br/>
          
          {t("I create")} <b>custom</b> {t("static and dynamic websites, tailored to your goals and personal style, ")}  
          <br />{t("as well as high-quality ")}<b>e-shops</b> {t("built on powerful CMS Platforms")}.      
          <br/>

          <Trans
            i18nKey="hear"
            components={{
              1: <Link 
                    to="/contact_me" 
                    // 
                  className='links'/>
            }}
          />
          </p>

      <div className='column_direction'>
        <Trans
          i18nKey="download"
          components={{
            1: <a href='/Maria_Xenaki_CV.pdf' className='links'/>
          }}
        />
        
        <Trans
          i18nKey="learn"
          components={{
            2: <Link to='/about_me' className='links' />
          }}
        />
      </div>
      

      <Container fluid className="mt-3 px-3 px-sm-2">
        <Row className="p-3 w-100" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Col xs={12} className="text-center">
            <h3 className="text-dark fw-bold"><Link to='/projects' style={{color:'black', textDecoration:'none'}}>Projects</Link></h3>
            <ImageCarousel />
          </Col>
        </Row>
      </Container>
    

        </div>
     </div> */}
     </div>
  
  )
}

export default Homepage

