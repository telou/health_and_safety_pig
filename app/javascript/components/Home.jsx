import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="page-background">
    <div className="container">

      <div className="title-header">
        <div>
          <div id="website-name">
            <h1 className="title">Health and Safety</h1><h1 id="pig">pigs</h1>
          </div>
          <p className="body-text">Keep your pigs safe with our pig-latin health and safety keyword translator. </p>
        </div>
        <div className="top-link">
          <Link to="/terms">
            All translations
          </Link>
          <i className="fas fa-arrow-circle-right"></i>
        </div>
      </div>

      <div id="phrase-input">

      </div>

      <div id="phrase-output">
      </div>
    </div>
  </div>
);



