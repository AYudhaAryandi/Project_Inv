import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <a href="#" class="timeline-content">
          <div class="timeline-icon">
            <i class="fa fa-globe"></i>
          </div>
          <h3 class="title">{this.props.acara}</h3>
          <p class="description">{this.props.deskripsi}</p>
          <div class="timeline-year">{this.props.tanggal}</div>
        </a>
      </div>
    );
  }
}

export default Card;
