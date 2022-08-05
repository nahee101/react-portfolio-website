import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                        <p>sjdupre@naver.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}