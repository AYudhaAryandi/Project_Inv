import React, { Component } from "react";
import "../../assets/css/susunanacara.css";
import ComponenAcara from "./ComponenAcara";
import { faMagento } from "@fortawesome/free-brands-svg-icons";

class SusunanAcara extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5 text-decoration-underline">SUSUNAN ACARA</h1>
        <div className="section_our_solution mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6  mb-2">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <ComponenAcara
                    icons={faMagento}
                    name="TALKSHOW"
                    desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  mb-2">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <ComponenAcara
                    icons={faMagento}
                    name="TALKSHOW"
                    desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6  mb-2">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <ComponenAcara
                    icons={faMagento}
                    name="TALKSHOW"
                    desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  mb-2">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <ComponenAcara
                    icons={faMagento}
                    name="TALKSHOW"
                    desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
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

export default SusunanAcara;
