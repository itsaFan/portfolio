import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./css/Skills.css"
import colorSharp from "../assets/img/splash-left.png";


export const Skills = () => {
    const responsive = {
        ultraWideDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    };


    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">  
                                <i className="devicon-html5-plain colored icon-skill"></i>
                                <h5>HTML</h5>          
                            </div>
                            <div className="item">
                                <i class="devicon-css3-plain colored"></i>
                                <h5>CSS</h5>
                            </div>
                            <div className="item"> 
                                <i class="devicon-javascript-plain colored"></i>
                                <h5>JavaScript</h5> 
                            </div>
                            <div className="item">                                    
                                <i class="devicon-bootstrap-plain colored"></i>      
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">                                    
                                <i class="devicon-angularjs-plain colored"></i>
                                <h5>Angular</h5>
                            </div>
                            <div className="item">                                    
                                <i class="devicon-react-original colored"></i>
                                <h5>React</h5>
                            </div>
                            <div className="item">                                    
                                <i class="devicon-java-plain colored"></i>
                                <h5>Java</h5>
                            </div>
                            <div className="item">                                    
                                <i class="devicon-spring-plain colored"></i>
                                <h5>Spring</h5>
                            </div>
                            <div className="item">                                    
                                <i class="devicon-mysql-plain colored"></i>
                                <h5>MySQL</h5>
                            </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>


            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}