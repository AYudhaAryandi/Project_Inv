
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import "../assets/css/about.css";

const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
         <img className="background-image-left" src={colorSharp} alt="" />
      <div className="container">
          
            <div className="skill-bx wow zoomIn">
              <h2>INVOFEST</h2>
        <div className="row">
              <div className="col-12">
              <div>
              <iframe width="500" height="300" src="https://www.youtube.com/embed/LFsskcpoAPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
            </div>
              <p>
                event spektakuler tahunan yang bernama Invofest (Informatics
                Vocational Festival), di mana kegiatan ini dapat memfasilitasi
                potensi yang dimiliki mahasiswa dalam mengembangkan dan
                menyalurkan kemampuan di bidang IT. Invofest (Informatics
                Vocational Festival) adalah suatu wadah pengembangan kreativitas
                dan inovasi, serta peningkatan ilmu pengetahuan dan teknologi
                dalam sebuah pembelajaran guna mengarahkan mahasiswa mencapai
                taraf kreativitas dan inovasi. Dengan adanya Invofest ini,
                diharapkan mahasiswa mampu menguasai teknologi, mengasah
                kemampuan di bidang IT dan meningkatkan daya kompetisi di dunia
                IT.<br></br>
              </p>
              </div>
              
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
