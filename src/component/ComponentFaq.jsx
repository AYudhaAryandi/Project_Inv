import React, { Component } from "react";
import Faq from "react-faq-component";
import "../assets/css/faq.css"

const data = {
  title: "FAQ Invofest 2023",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
};


export default class ComponentFaq extends Component {
  render() {
    return (
      <div className="test">
        <Faq
          data={data}
          styles={{
            bgColor: "transparent",
            titleTextColor: "#fff",
            rowTitleColor: "#fff",
            rowTitleTextSize: "large",
            rowContentColor: "#fff",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            colContentTextSize: "12px",
            arrowColor: "black",
          }}
        />
      </div>
    );
  }
}
