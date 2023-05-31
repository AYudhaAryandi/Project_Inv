import React from "react";
import "../../assets/css/index.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      <a
        href="https://invofest2022@gmail.com"
        title="gmail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="fb" icon={faGoogle} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCdaOcNM5ndtr2NLtmB5XuTg"
        target="_blank"
        title="youtube"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faYoutube} />
      </a>
      <a
        data-toggle="tooltip-bottom"
        title="instagram"
        href="https://instagram.com/invofest_2022?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="insta" icon={faInstagram} />
      </a>
    </Col>
  );
}
