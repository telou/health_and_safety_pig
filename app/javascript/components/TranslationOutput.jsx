import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

class TranslationOutput extends React.Component {

  render () {
    return (
      <div>
        <div className="phrase-output">
          <p className="translation-body">
          {this.props.name}
          </p>
        </div>
      </div>
      )
  }
}

export default TranslationOutput;

