import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../../../assets/css/competitions.css"

function Cards () {
    return (
      <React.Fragment>
        <Container>
          <h1 class="section-title">Competition</h1>
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
            <div className="col">
              {/* 1 */}
              <a
                href="https://www.mythrillfiction.com/the-dark-rider"
                alt="Mythrill"
                target="_blank"
              >
                <div class="cardBadge">
                  <div class="wrapperBadge">
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                      class="cover-image"
                    />
                  </div>
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                    class="title"
                  />
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                    class="character"
                  />
                </div>
              </a>
            </div>

            <div className="col">
              {/* 1 */}
              <a
                href="https://www.mythrillfiction.com/the-dark-rider"
                alt="Mythrill"
                target="_blank"
              >
                <div class="cardBadge">
                  <div class="wrapperBadge">
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                      class="cover-image"
                    />
                  </div>
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                    class="title"
                  />
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                    class="character"
                  />
                </div>
              </a>
            </div>

            <div className="col">
              {/* 1 */}
              <a
                href="https://www.mythrillfiction.com/the-dark-rider"
                alt="Mythrill"
                target="_blank"
              >
                <div class="cardBadge">
                  <div class="wrapperBadge">
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                      class="cover-image"
                    />
                  </div>
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                    class="title"
                  />
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                    class="character"
                  />
                </div>
              </a>
            </div>

            <div className="col">
              {/* 1 */}
              <a
                href="https://www.mythrillfiction.com/the-dark-rider"
                alt="Mythrill"
                target="_blank"
              >
                <div class="cardBadge">
                  <div class="wrapperBadge">
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                      class="cover-image"
                    />
                  </div>
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                    class="title"
                  />
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                    class="character"
                  />
                </div>
              </a>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
}
export default Cards;