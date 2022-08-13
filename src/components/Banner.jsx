import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Front-end"]

    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <div className={"animate__animated animate__bounceInLeft"}>
                            <div className="banner-bx">
                                <span className="tagline">Welcome to my Porfolio</span>
                                <h1><span className="wrap">{text}</span></h1>
                            </div>

                            <div>
                                <h1>프론트엔드 개발자,</h1>
                                <h1>박선주입니다</h1>
                                <p>사용자가 이용하기 쉽고, 모던한 웹사이트를 개발하고 싶습니다</p>
                                <button><i class="bi bi-arrow-right-short"></i> 더 보기</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={7} >
                    </Col>
                </Row>
            </Container>
        </section>
    )
}