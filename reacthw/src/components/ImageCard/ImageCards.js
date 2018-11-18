import React from "react";
import "./style.css";

function ImageCards(props) {
    return (
      <div className="container">
        <div className="yCard">
          <div className="img-container">
            <span onClick={() => props.shuffleImages(props.id)} className="shuffle">
              <img alt={props.name} src={props.image} />
            </span>
          </div>
        </div>
        <br></br>
      </div>
    );
  };

export default ImageCards;