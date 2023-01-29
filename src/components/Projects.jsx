import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css'

import webImg1 from "../assets/img/web-project1.png";
import webImg2 from "../assets/img/web-project2.png";
import webImg3 from "../assets/img/web-project3.png";
import webImg4 from "../assets/img/web-project4.png";
import webImg5 from "../assets/img/web-project5.png";
import databaseImg1 from "../assets/img/database-project1.png";
import miniImg1 from "../assets/img/mini-project1.png";

import { ProjectCard } from "./ProjectCard";
import "./css/Projects.css"


export const Project = () => {

    const website = [
        {
          title: "ABC Learning",
          description: "My First Front-End Development",
          imgUrl: webImg1,
        },
        {
          title: "ABC Jobs Portal",
          description: "Front-End Development using Angular",
          imgUrl: webImg2,
        },
        {
          title: "ABC Jobs Portal V2",
          description: "Web Development using Spring Boot",
          imgUrl: webImg3,
        },
        {
          title: "AAA Web Hosting",
          description: "Web Development using Liferay",
          imgUrl: webImg4,
        },
        {
          title: "XYZ Cars Portal",
          description: "Web Development for car bidding using Spring Boot",
          imgUrl: webImg5,
        },
      ];

      const database = [
        {
          title: "Database Design",
          description: "Designed the Database using MySQL",
          imgUrl: databaseImg1,
        },
      ];

      const javaProject = [
        {
          title: "MCQ System",
          description: "Developed Multiple-Choice Quiz System using Java Programming Language",
          imgUrl: miniImg1,
        },
      ];

      return (
        <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Below are the academic projects that I developed so far in this past year.
                    <br></br>New project will be added gradually in the future.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Website </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Database</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mini Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__bounceIn" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            website.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            database.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            javaProject.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

      )
}