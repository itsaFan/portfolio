import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "./css/Contact.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Information</h2>
                <form>
                  <Row>
                    <Col size={12} sm={8} className="px-1">
                      <p><i class="fa-solid fa-phone px-2"></i> +62 813 9475 7477</p>
                    </Col>
                    <Col size={12} sm={8} className="px-1">
                    <p><i class="fa-solid fa-location-dot px-2"></i> Denpasar, Bali, Indonesia</p>
                    </Col>
                    <Col size={12} sm={8} className="px-1">
                    <p><i class="fa-solid fa-envelope px-2"></i> steffansim@gmail.com</p>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}