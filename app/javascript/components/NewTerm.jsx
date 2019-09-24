import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


class NewTerm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.stripHtmlEntities = this.stripHtmlEntities.bind(this);

  }

  // stripHtmlEntities(str) {
  //   return String(str)
  //     .replace(/</g, "&lt;")
  //     .replace(/>/g, "&gt;");
  // }


  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/terms/create";
    const phrase = this.state.value;
    alert('A phrase was submitted: ' + this.state.value);

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
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      // .then(response => this.props.history.push(`/term/${response.id}`))
      .catch(error => console.log(error.message));
  }

    render() {
      return (
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="termPhrase">Health and Safety Term
              </label>
              <input
                type="text"
                value={this.stat}
                id="termPhrase"
                className="form-control"
                required
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn custom-button mt-3">
            Translate
            </button>
          </form>
      );
    }
}

export default NewTerm;