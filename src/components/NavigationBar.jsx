import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./css/Navbar.css";
import CV from '../assets/mics/CV-Steffansim.pdf';
import { BrowserRouter as Router } from "react-router-dom";


export const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="d-flex justify-content-center">
          <Navbar.Collapse className="d-flex justify-content-center" id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Project</Nav.Link>
            </Nav>
            <span className="navbar-text ">
                  <a className="btn vvd p-2" href={CV}><span>Download CV</span></a>          
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Router>
    )
}