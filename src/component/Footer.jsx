import React from "react";
import { Col } from "react-bootstrap";
import SocialIcons from "./LandingPage/SosialIcons";


export default function Footer() {
  return (
    <div className="bg-dark text-center">
      <Col xl={12}>
        <SocialIcons />
        <small className="text-muted">@invofest 2022</small>
      </Col>
    </div>
  );
}
