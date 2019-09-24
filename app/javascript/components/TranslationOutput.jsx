import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

class TranslationOutput extends React.Component {

  render () {
    return (
      <div>
      <p>
      Translation: {this.props.name}
      </p>
      </div>
      )
  }
}

export default TranslationOutput;

