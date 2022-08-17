import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorBlur01 from '../assets/img/color-blur1.svg'

import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Skills = () => {

    return (
        <section className="skill" id="skills">
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
                                                        <div className="skill-description">
                                                            <article >
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>HTML</h4>
                                                                </div>
                                                            </article>

                                                            <article>
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>CSS</h4>
                                                                </div>
                                                            </article>

                                                            <article>
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>JavaScript</h4>
                                                                </div>
                                                            </article>

                                                            <article>
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>React</h4>
                                                                </div>
                                                            </article>

                                                            <article>
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>Vue</h4>
                                                                </div>
                                                            </article>

                                                            <article>
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>Firebase</h4>
                                                                </div>
                                                            </article>

                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <div className="skill-description">
                                                            <article>
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>교육기관</h4>
                                                                    <p><strong>그린컴퓨터아카데미</strong> <br />
                                                                        [디지털컨버전스] 프로그레시브 웹앱 프론트엔드 개발 실무자 양성과정 A-1 <br />
                                                                        - 2022.01 ~ 2022.07</p>
                                                                </div>
                                                            </article>

                                                            <article>
                                                                <h4><i className="bi bi-patch-check-fill"></i></h4>
                                                                <div className="skill-lang-bx">
                                                                    <h4>자격증</h4>
                                                                    <p>
                                                                        정보처리기사 필기 <br />
                                                                        - 2022.03
                                                                    </p>
                                                                </div>
                                                            </article>
                                                        </div>
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