import React, { Component } from 'react';
import Navbars from '../component/Navbars';
import BannerAcara from '../component/banner/BannerAcara';
// import Personal from '../component/card/personal/Personal';
import "../assets/css/card/personal.css"
import img from "../assets/img/12345.jpg"
import DescPersonal from '../component/card/personal/DescPersonal';
import About from '../component/About';

class Workshop extends Component {
    render() {
        return (
          <div>
            <Navbars />
            <BannerAcara
              title="Workshop"
              description="Acara Workshop Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
            />
            <div className="">
              <section id="team" class="pb-5">
                <div class="container">
                  <h5 class="section-title h1">Pembicara</h5>
                  <div class="row">
                    {/* <!-- Team member --> */}
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <DescPersonal
                        image={img}
                        name="Mohamad Khadik"
                        job="Web Developer"
                        names="Mohamad Khadik"
                        jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
                        fb="https://"
                        twiter="https://"
                        google="https://"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <DescPersonal
                        image={img}
                        name="Mohamad Idham Bakhri"
                        job="Web Developer"
                        names="Mohamad Idham Bakhri"
                        jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
                      />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <DescPersonal
                        image={img}
                        name="iqbal maulana"
                        job="Web Developer"
                        names="iqbal maulana"
                        jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
                      />

                    </div>
                  </div>
                </div>

                <div className="skill-bx border w-75 mx-auto">
            <h2>HTM & FASILITAS</h2>
            <div className="">
              <div className="col-12">
                <div></div>
                <div className="Container w-50 mx-auto">
                  <h5 className="mt-5 col-sm-13">-Umum : Rp 50.000</h5>
                  <h5 className="mt-5 col-sm-13">Pembayaran via transfer:</h5>
                  <div className="text-start">
                    <img src="" alt="" srcset="" />
                    <p >OVO:</p>
                    <p>DANA:</p>
                    <p>MANDIRI:</p>
                    <p>SHOPEEPAY:</p>
                    <p>GOPAY:</p>
                  </div>
                  <h5 className="mt-5 col-sm-13">Konfirmasi Pembayaran:</h5>
                  <div className="text-start">
                    <p>WA:</p>
                    <p>Email:</p>
                    <p>Contact Person:</p>
                  </div>
              </div>       
                 </div>
                 </div> 
                 </div>      
                 
              </section>
            </div>
          </div>
        );
    }
}

export default Workshop;