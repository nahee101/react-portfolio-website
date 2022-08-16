import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorBlur01 from '../assets/img/color-blur1.svg'
import TrackVisibility from 'react-on-screen';


export const Skills = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills & 교육 사항</h2>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorBlur01} />
        </section>
    )
};