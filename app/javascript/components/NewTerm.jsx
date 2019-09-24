import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import TranslationOutput from "./TranslationOutput";


class NewTerm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      translation: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    this.refreshPage = this.refreshPage.bind(this);

  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  refreshPage(event) {
  this.setState({ value: '', translation: '' });
}

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/terms/create";
    const phrase = this.state.value;

    if (phrase.length == 0)
      return;

    const body = {
      phrase: phrase.replace(/\n/g, "<br> <br>")
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body),

      })
      .then(response => {
        if (response.ok) {
          response.json().then(function(parsedJson) {
            return parsedJson
          })
          .then(parsedJSON => this.setState({ translation: parsedJSON["translation"] }))
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then(response => this.props.history.push(`/term/${response.id}`))
      .catch(error => console.log(error.message));
  }

    render() {
      return (
        <div id="phrase-input">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="label" htmlFor="termPhrase">Health and Safety Term
              </label>
              <input
                type="text"
                value={this.state.value}
                id="termPhrase"
                className="form-control"
                required
                onChange={this.onChange}
              />
            </div>
            <div clasName="buttonrow">
              <button type="submit" className="btn phrase-submit">
              Translate
              </button>
              <button onClick={ this.refreshPage.bind(this)} className="btn refresh">
              Refresh
              </button>
            </div>
          </form>
          <TranslationOutput name={this.state.translation} />
        </div>

      );
    }
}

export default NewTerm;
