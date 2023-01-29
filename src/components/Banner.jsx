import 'animate.css'
import "./css/Banner.css"
import MeIMG from '../assets/img/me.png';
import { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from "react-on-screen"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Development", "UI/UX Designer" ];
    const period = 1800;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker)
        };}, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container className="d-flex justify-content-center">
                <Row className='align-items-center d-flex justify-content-center text-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div classname={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to My Portfolio</span>
                            <h1>{`Hello, I'm Steffansim`} <br></br>
                                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Development", "UI/UX Designer" ]'>
                                    <span className="wrap">{text}</span>
                                </span> 
                            </h1>
                            <div className='me'>
                                <img src={MeIMG} alt='me' />
                            </div>
                            <p>Dedicated student, graduated as bachelor in Psychology & currently studying as software engineer. 
                                I'm constantly striving to learn more and reach new heights.
                                I believe that the only way to be successful is to never stop learning. 
                                By attending seminars, workshops, and courses,
                                I'm continuously expanding my knowledge base in order to ensure success in my career.
                                <br></br>I'm ready to commit & utilizing my skills for the company.
                            </p>

                        </div>}
                        </TrackVisibility>                            
                    </Col>
                </Row>       
            </Container>  
        </section>
    )
}