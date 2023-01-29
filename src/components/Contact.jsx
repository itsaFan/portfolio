import { Container, Row, Col } from "react-bootstrap";
import "./css/Contact.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
               <iframe className={isVisible ? "animate__animated animate__zoomIn" : ""} width="560" height="355" src="https://www.youtube.com/embed/XkY0DXW9OyI" 
               title="YouTube video player" frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowfullscreen></iframe>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>
                <h2>Contact Information</h2>
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}