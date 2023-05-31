import React, { Component } from "react";
import "../../../assets/css/cardtiem.css";
import Card from "./Card";

class Timeline extends Component {

  render() {
    return (
      <div>
        {/* <img className="background-image-kanan" src={colorSharp} alt="Image" /> */}
        <h1 className="text-center mt-5 text-decoration-underline">JADWAL ACARA</h1>
        <div class="container mt-5">
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline mt-5">
                <div class="timeline ">
                <Card
                    tanggal="19 Oktober 2023"
                    acara="Webinar"
                    deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet obcaecati eaque beatae sed officiis earum ab, ex cum odio consectetur illum saepe maiores tempore. Quisquam suscipit possimus similique veritatis quia."
                  />
                    
                </div>
                <div class="timeline">
                <Card
                    tanggal="20 Oktober 2023"
                    acara="Webinar"
                    deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet obcaecati eaque beatae sed officiis earum ab, ex cum odio consectetur illum saepe maiores tempore. Quisquam suscipit possimus similique veritatis quia."
                  />
                </div>
            </div>
        </div>
        </div>
    
    </div>
</div>
    );
  }
}

export default Timeline;
