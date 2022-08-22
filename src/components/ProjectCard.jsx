import Col from "react-bootstrap/esm/Col"

export const ProjectCard = ({ url, title, subtitle, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={url}>
                    <img src={imgUrl} />
                    <div className="proj-txt">
                        <h4>{title}</h4>
                        <h6>{subtitle}</h6>
                        <span>{description}</span>
                    </div>

                </a>
            </div>
        </Col>
    )
}