import React, { Component } from "react";
import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";

class About extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          title="About"
          description="Informasi terkait Event Invofest 2023"
        />
      </div>
    );
  }
}

export default About;
