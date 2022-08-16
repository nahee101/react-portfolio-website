import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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
        <section className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>사용 언어 & 교육 사항</h2>
                            <Col size={12}>
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                            <Tab.Container id="skill-tabs" defaultActiveKey="first">
                                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="skill-pills-tab">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">사용 언어</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">교육 사항</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                                    <Tab.Pane eventKey="first">
                                                        <div>

                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>}
                                </TrackVisibility>
                            </Col>


                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image" src={colorBlur01} />
        </section>
    )
};