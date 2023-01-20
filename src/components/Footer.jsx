import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./css/Footer.css"


export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Steffansim</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/steffansim/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/s__fanfan/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/itsaFan"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved <br></br> Credit to Webdecoded ( youtube channel )</p>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
