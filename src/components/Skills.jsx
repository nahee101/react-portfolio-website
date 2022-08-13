import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorBlur01 from '../assets/img/color-blur1.svg'

export const Skills = () => {
    const responsive = {
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

    const mySkill = [
        { lang: 'HTML5', img: '' },
        { lang: 'CSS', img: '' },
        { lang: 'JavaScript', img: '' },
        { lang: 'React', img: '' },

    ]

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    mySkill.map((m, idx) => {
                                        <div key={idx}>
                                            <img src={m.img} alt="이미지" />
                                            <h2>{m.lang}</h2>
                                        </div>
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorBlur01} />
        </section>
    )
};