import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorBlur01 from "../assets/img/color-blur1.svg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: ":Uptown",
            subtitle: "리액트/파이어베이스/협업",
            description: "업사이클링 정보 공유 커뮤니티",
            imgUrl: projImg1,
            url: 'https://nahee101.github.io/upcyclingTown_build'
        },
        {
            title: "개인 포트폴리오 사이트",
            subtitle: "리액트/부트스트랩",
            description: "개인 포트폴리오 소개 사이트",
            imgUrl: projImg2,
        },
        {
            title: "암호화폐 정보 사이트",
            subtitle: "리액트, rapidAPI",
            description: "암호화폐 뉴스, 24hr 중 가격 소개 사이트",
            imgUrl: projImg3,
            url: 'https://nahee101.github.io/crypto_app_build'
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorBlur01}></img>
        </section>
    )
}
