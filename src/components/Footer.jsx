import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={12} className="text-center text-sm-end">
                        <p>CopyRight 2022. All Right Reserved</p>
                        <p>sjdupre@naver.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}