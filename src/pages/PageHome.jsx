import React, { Component } from "react";
import Navbars from "../component/Navbars";
import Banner from "../component/banner/Banner";
import About from "../component/About";
import Timeline from "../component/card/timeline/Timeline";
import SusunanAcara from "../component/acara/SusunanAcara";

import ComponentFaq from "../component/ComponentFaq";
import Maps from "../component/Maps";


export default class PageHome extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Banner />
         <About />
        <SusunanAcara/>
        <div className="mt-5">
        <Timeline />
        </div>
       <ComponentFaq/>
       <Maps/>
        {/* <footer className="mt-5 p-5">
          <Footer />
        </footer> */}
      </div>
    );
  }
}
