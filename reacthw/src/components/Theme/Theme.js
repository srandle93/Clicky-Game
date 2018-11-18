import React from "react";
import "./style.css";

function Theme(props) {
    return (
        <div className="theme">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Trap Card Shuffle</h1>
              <p class="lead"> Click each card once to win. Don't get trapped within the shuffle!</p>
              <div className="points">
                Life Points:
              </div>
            </div>
          </div>
            {props.children}
        </div>
    )
}

export default Theme;